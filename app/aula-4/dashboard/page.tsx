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
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">

      {/* Avatar com a inicial do e-mail */}
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
        {user.email.charAt(0).toUpperCase()}
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Bem-vindo(a)!
      </h1>
      <p className="text-sm text-gray-500 mb-4 break-all">{user.email}</p>

      {/* Badge da role */}
      <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-700">
        {user.role}
      </span>

      <hr className="my-6 border-gray-100" />

      <button
        onClick={logout}
        className="w-full rounded-xl border border-red-200 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
      >
        Sair
      </button>
    </div>
  </div>
  )

}