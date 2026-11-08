"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/aula-4/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { login } = useAuth();
  const router = useRouter();

  // Efeito: some com a mensagem de erro após 4 segundos
  useEffect(() => {
    if (!error) return;

    console.log("[login] erro exibido, timer de 4s iniciado");
    const timer = setTimeout(() => {
      console.log("[login] 4s passaram, removendo mensagem");
      setError(null);
    }, 4000);

    // cleanup: cancela o timer se o componente desmontar
    // ou se um novo erro chegar antes dos 4s
    return () => {
      console.log("[login] timer cancelado/limpo");
      clearTimeout(timer);
    };
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    // Cancela o comportamento padrão do navegador para o evento (o envio nativo do formulário), evitando o reload da página e, com isso, preservando o estado.
    setError(null);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login falhou", err);
      setError("E-mail ou senha inválidos.");
      setEmail("");
      setPassword(""); 
      // devolve o foco ao primeiro campo, para recomeçar do início
      emailRef.current?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-md font-medium text-gray-600 hover:text-black transition-colors mb-6"
        >
          ← Ir para a Home
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Input de e-mail: com emailRef e type="email" */}
          <input 
            ref={emailRef}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required />
          <input
            ref={passwordRef}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
            required />
            
          {/* role="alert": leitores de tela anunciam a mensagem ao aparecer */}
          {error && (
            <p role="alert" className="text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors text-sm"
            >Entrar</button>
        </form>
      </div>
    </div>
  );
}