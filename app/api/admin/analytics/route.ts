import { getAnalyticsSummary } from "@/lib/analytics";
import { isAdmin } from "@/lib/auth";

export async function GET() {
  if (!(await isAdmin())) {
    return Response.json({ error: "Not authorised." }, { status: 401 });
  }

  try {
    const summary = await getAnalyticsSummary();
    return Response.json(summary);
  } catch (err) {
    console.error("Failed to load analytics", err);
    return Response.json({ error: "Could not load analytics." }, { status: 500 });
  }
}
