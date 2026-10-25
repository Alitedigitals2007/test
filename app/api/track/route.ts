import { recordEvent } from "@/lib/analytics";
import { sameOrigin } from "@/lib/auth";
import { rateLimit } from "@/lib/ratelimit";

const EVENT_TYPES = new Set(["view", "click"]);

function silent(): Response {
  return new Response(null, { status: 204 });
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return silent();
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(`track:${ip}`, 120, 60 * 1000)) {
    return silent();
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return silent();
  }

  const data = body as Record<string, unknown>;
  const type = typeof data.type === "string" ? data.type : "";
  const path = typeof data.path === "string" ? data.path.trim() : "";
  const target =
    typeof data.target === "string" ? data.target.trim().slice(0, 200) : "";
  const visitorId =
    typeof data.visitorId === "string" ? data.visitorId.trim().slice(0, 64) : "";
  const referrer =
    typeof data.referrer === "string" ? data.referrer.trim().slice(0, 200) : "";

  if (
    !EVENT_TYPES.has(type) ||
    !path.startsWith("/") ||
    path.length > 300 ||
    visitorId.length < 6
  ) {
    return silent();
  }

  try {
    await recordEvent({
      type: type as "view" | "click",
      path,
      target: target || null,
      visitorId,
      referrer: referrer || null,
    });
  } catch (err) {
    console.error("Failed to record analytics event", err);
  }

  return silent();
}
