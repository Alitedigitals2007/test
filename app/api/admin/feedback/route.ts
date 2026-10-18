import { isAdmin } from "@/lib/auth";
import { listFeedback } from "@/lib/feedback";

export async function GET(request: Request) {
  if (!(await isAdmin())) {
    return Response.json({ error: "Not authorised." }, { status: 401 });
  }

  const url = new URL(request.url);
  const category = url.searchParams.get("category") ?? "all";
  const statusParam = url.searchParams.get("status") ?? "all";
  const page = Number(url.searchParams.get("page") ?? "1");

  const status =
    statusParam === "new" || statusParam === "reviewed" ? statusParam : "all";

  try {
    const data = await listFeedback({ category, status, page });
    return Response.json(data);
  } catch (err) {
    console.error("Failed to list feedback", err);
    return Response.json({ error: "Could not load feedback." }, { status: 500 });
  }
}
