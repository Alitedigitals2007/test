import { adminConfigured, isAdmin } from "@/lib/auth";

export async function GET() {
  return Response.json({
    authenticated: await isAdmin(),
    configured: adminConfigured(),
  });
}
