"use client";

import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from "jsonwebtoken";

export type User = {
  email: string;
  role: "user" | "admin";
}

type AuthContextProps = {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedToken = Cookies.get('token');

    if (savedToken) {
      const { email, role } = jwt.decode(savedToken) as unknown as User;

      setUser({ email, role });
      setToken(savedToken);
    }
  }, []); // array vazio é executado sempre que inicia o componente/context.

  const login = async (email: string, password: string) => {
    const res = await fetch("/aula-4/api/auth", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    // Se vier HTML (404/500), data fica null em vez de estourar SyntaxError
    const data = await res.json().catch(() => null);

    if (res.ok) {
      setUser(data.user);
      setToken(data.token);
    } else {
      setToken(null);
      setUser(null);
      throw new Error(data?.message ?? `Falha no login (status ${res.status})`);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    Cookies.remove('token');
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // hook personalizado para usar nos componentes