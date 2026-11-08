import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { User } from "@/context/aula-4/AuthContext";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // retorna token simples para exemplificar recuperação de credenciais
  if (email === "admin@example.com" && password === "123456") {
    const user: User = { email, role: "admin" };

    const token = jwt.sign(user, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({ user })

    response.cookies.set('token', token, {
      secure: true,
      path: '/',
      maxAge: 60 * 60, // 1 hora
    })

    return response;
  }

  return NextResponse.json(
    { message: "Credenciais Inválidas" },
    { status: 401 }
  );
}