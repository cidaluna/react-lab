import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  console.log("Req: ", req);
  const token = req.cookies.get("token")?.value;

  console.log("token: ", token);

  if (!token) return NextResponse.redirect(new URL("/aula-4/login", req.url));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log("Decoded: ", decoded);
    const role = (decoded as any).role;

    if (req.nextUrl.pathname.startsWith("/aula-4/dashboard") && role !== "admin") {
      return NextResponse.redirect(new URL("/aula-4/login", req.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/aula-4/login", req.url));
  }
}

export const config = {
  matcher: ["/aula-4/dashboard"],
};
