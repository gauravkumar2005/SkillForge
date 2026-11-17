import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getSessionUserId() {
  const token = (await cookies()).get("skillforge_session")?.value;
  if (!token) return null;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload.userId ?? null;
  } catch {
    return null;
  }
}