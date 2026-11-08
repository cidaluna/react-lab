"use client";

import { useAuth } from "@/context/aula-4/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/aula-4/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div>
      <h1>Bem vindo, {user.email}!</h1>
      <p>Sua role: {user.role}</p>
      <button
        onClick={logout}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl transition-colors text-sm"
        >Sair</button>
    </div>
  )

}