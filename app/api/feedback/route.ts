import { FEEDBACK_CATEGORIES } from "@/lib/categories";
import { insertFeedback } from "@/lib/feedback";
import { rateLimit } from "@/lib/ratelimit";
import { sameOrigin } from "@/lib/auth";

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ error: "Invalid origin." }, { status: 403 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(`feedback:${ip}`, 5, 10 * 60 * 1000)) {
    return Response.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const honeypot = typeof data.website === "string" ? data.website : "";
  if (honeypot.trim() !== "") {
    return Response.json({ ok: true });
  }

  const category = typeof data.category === "string" ? data.category.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const name = typeof data.name === "string" ? data.name.trim() : "";

  if (!(FEEDBACK_CATEGORIES as readonly string[]).includes(category)) {
    return Response.json({ error: "Please choose a category." }, { status: 400 });
  }
  if (message.length < 10) {
    return Response.json(
      { error: "Please write at least 10 characters so we can understand your point." },
      { status: 400 }
    );
  }
  if (message.length > 2000) {
    return Response.json({ error: "Please keep your message under 2000 characters." }, { status: 400 });
  }
  if (name.length > 80) {
    return Response.json({ error: "Please keep your name under 80 characters." }, { status: 400 });
  }

  try {
    await insertFeedback({
      name: name === "" ? null : name,
      category,
      message,
    });
  } catch (err) {
    console.error("Failed to store feedback", err);
    return Response.json(
      { error: "Something went wrong on our side. Please try again." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
