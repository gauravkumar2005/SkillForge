import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { prisma } from "../../../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    const email = String(body?.email ?? "").trim().toLowerCase();
    const password = String(body?.password ?? "");
    const remember = Boolean(body?.remember);

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    // Same message for both cases, so nobody can guess which emails exist
    const valid = user
      ? await bcrypt.compare(password, user.passwordHash)
      : false;

    if (!user || !valid) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ userId: user.id, name: user.name })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(remember ? "7d" : "1d")
      .sign(secret);

    const res = NextResponse.json({ ok: true });
    res.cookies.set("skillforge_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24,
    });
    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}