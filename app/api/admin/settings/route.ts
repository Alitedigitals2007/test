import { revalidateTag } from "next/cache";
import { isAdmin, sameOrigin } from "@/lib/auth";
import { getSettings, saveSettings, type SiteSettings } from "@/lib/settings";

const FIELDS: (keyof SiteSettings)[] = [
  "whatsappNumber",
  "whatsappGroup",
  "instagram",
  "x",
  "email",
  "manifesto",
];

export async function GET() {
  if (!(await isAdmin())) {
    return Response.json({ error: "Not authorised." }, { status: 401 });
  }
  return Response.json({ settings: await getSettings() });
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) {
    return Response.json({ error: "Not authorised." }, { status: 401 });
  }
  if (!sameOrigin(request)) {
    return Response.json({ error: "Invalid origin." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const values: Partial<SiteSettings> = {};
  for (const field of FIELDS) {
    const value = data[field];
    if (typeof value !== "string") continue;
    if (value.length > 500) {
      return Response.json({ error: "One of the links is too long." }, { status: 400 });
    }
    values[field] = value.trim();
  }

  const links = Object.entries(values).filter(([, v]) => v.startsWith("http"));
  for (const [field, value] of links) {
    try {
      const url = new URL(value);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        throw new Error("invalid protocol");
      }
    } catch {
      return Response.json(
        { error: `The ${field} link must be a valid http(s) URL.` },
        { status: 400 }
      );
    }
  }

  try {
    await saveSettings(values);
    revalidateTag("settings", "seconds");
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to save settings", err);
    return Response.json({ error: "Could not save settings." }, { status: 500 });
  }
}
