"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/aula-4/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login falhou", err);
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
          <input 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password" required />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors text-sm"
            >Entrar</button>
        </form>
      </div>
    </div>
  );
}