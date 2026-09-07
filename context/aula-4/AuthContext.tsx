"use client";

import { createContext, useState, useContext, useEffect } from 'react';

type User = {
  email: string;
  role: "user" | "admin";
}

type AuthContextProps = {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedToken && savedUser) {
      // Envelopar em um setTimeout joga a execução para a fila assíncrona, ou seja, 
      // Ao adicionar o setTimeout(..., 0), você diz ao React: "Monte o componente primeiro e, logo 
      // em seguida, execute essas atualizações". Isso evita que o ciclo de montagem síncrona do useEffect 
      // entre em conflito com a renderização da tela.
      setTimeout(() => {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
      }, 0);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({email, password}),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
    } else {
      throw new Error(data.message);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // hook personalizado para usar nos componentes