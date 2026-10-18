import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  adminConfigured,
  adminCookieOptions,
  checkPassword,
  createSessionToken,
  sameOrigin,
} from "@/lib/auth";
import { rateLimit } from "@/lib/ratelimit";

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ error: "Invalid origin." }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(`login:${ip}`, 8, 10 * 60 * 1000)) {
    return Response.json(
      { error: "Too many attempts. Please wait a few minutes." },
      { status: 429 }
    );
  }

  if (!adminConfigured()) {
    return Response.json(
      { error: "Admin access is not configured on this deployment yet." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const password = (body as Record<string, unknown>).password;
  if (typeof password !== "string" || !checkPassword(password)) {
    return Response.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = createSessionToken();
  if (!token) {
    return Response.json({ error: "Admin access is not configured." }, { status: 503 });
  }

  const store = await cookies();
  store.set(ADMIN_COOKIE, token, adminCookieOptions);
  return Response.json({ ok: true });
}
