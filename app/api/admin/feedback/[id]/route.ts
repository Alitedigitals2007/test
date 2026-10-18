import { isAdmin, sameOrigin } from "@/lib/auth";
import { deleteFeedback, setReviewed } from "@/lib/feedback";

export async function PATCH(request: Request, ctx: RouteContext<"/api/admin/feedback/[id]">) {
  if (!(await isAdmin())) {
    return Response.json({ error: "Not authorised." }, { status: 401 });
  }
  if (!sameOrigin(request)) {
    return Response.json({ error: "Invalid origin." }, { status: 403 });
  }

  const { id } = await ctx.params;
  const numericId = Number(id);
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const reviewed = (body as Record<string, unknown>).reviewed;
  if (typeof reviewed !== "boolean" || !Number.isInteger(numericId)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    await setReviewed(numericId, reviewed);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to update feedback", err);
    return Response.json({ error: "Could not update." }, { status: 500 });
  }
}

export async function DELETE(request: Request, ctx: RouteContext<"/api/admin/feedback/[id]">) {
  if (!(await isAdmin())) {
    return Response.json({ error: "Not authorised." }, { status: 401 });
  }
  if (!sameOrigin(request)) {
    return Response.json({ error: "Invalid origin." }, { status: 403 });
  }

  const { id } = await ctx.params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    await deleteFeedback(numericId);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to delete feedback", err);
    return Response.json({ error: "Could not delete." }, { status: 500 });
  }
}
