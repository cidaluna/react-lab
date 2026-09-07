import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@example.com" && password === "123456") {
    const user = { email, role: "admin" };

    const token = jwt.sign(user, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return NextResponse.json({ token, user });
  }

  return NextResponse.json(
    { message: "Credenciais Inválidas" },
    { status: 401 }
  );
}