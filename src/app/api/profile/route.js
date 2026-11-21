import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { getSessionUserId } from "../../../lib/session";

const selectFields = { name: true, email: true, bio: true, createdAt: true };

export async function GET() {
  try {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json({ error: "Not logged in." }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: selectFields,
    });
    if (!user) {
      return NextResponse.json({ error: "Not logged in." }, { status: 401 });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error("Profile GET error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json({ error: "Not logged in." }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    const name = String(body?.name ?? "").trim();
    const bio = String(body?.bio ?? "").trim();

    if (!name) {
      return NextResponse.json({ error: "Name cannot be empty." }, { status: 400 });
    }
    if (name.length > 60) {
      return NextResponse.json(
        { error: "Name must be 60 characters or less." },
        { status: 400 }
      );
    }
    if (bio.length > 300) {
      return NextResponse.json(
        { error: "Bio must be 300 characters or less." },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { name, bio },
      select: selectFields,
    });

    return NextResponse.json({ user });
  } catch (err) {
    console.error("Profile PATCH error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}