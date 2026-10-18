import { ensureSchema, getPool } from "./db";

export type FeedbackItem = {
  id: number;
  name: string | null;
  category: string;
  message: string;
  reviewed: boolean;
  createdAt: string;
};

export type FeedbackQuery = {
  category?: string;
  status?: "all" | "new" | "reviewed";
  page?: number;
  pageSize?: number;
};

export async function insertFeedback(input: {
  name: string | null;
  category: string;
  message: string;
}): Promise<void> {
  const pool = getPool();
  if (!pool) throw new Error("No database configured");
  await ensureSchema();
  await pool.query(
    "INSERT INTO feedback (name, category, message) VALUES ($1, $2, $3)",
    [input.name, input.category, input.message]
  );
}

export async function listFeedback(query: FeedbackQuery): Promise<{
  items: FeedbackItem[];
  total: number;
  counts: { total: number; reviewed: number; byCategory: Record<string, number> };
}> {
  const pool = getPool();
  if (!pool) throw new Error("No database configured");
  await ensureSchema();

  const pageSize = Math.min(Math.max(query.pageSize ?? 20, 1), 100);
  const page = Math.max(query.page ?? 1, 1);

  const where: string[] = [];
  const params: unknown[] = [];

  if (query.category && query.category !== "all") {
    params.push(query.category);
    where.push(`category = $${params.length}`);
  }
  if (query.status === "new" || query.status === "reviewed") {
    params.push(query.status === "reviewed");
    where.push(`reviewed = $${params.length}`);
  }

  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

  const totalResult = await pool.query<{ count: string }>(
    `SELECT COUNT(*)::text AS count FROM feedback ${whereSql}`,
    params
  );

  const itemsResult = await pool.query<{
    id: string;
    name: string | null;
    category: string;
    message: string;
    reviewed: boolean;
    created_at: Date;
  }>(
    `SELECT id::text, name, category, message, reviewed, created_at
     FROM feedback ${whereSql}
     ORDER BY created_at DESC
     LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
    [...params, pageSize, (page - 1) * pageSize]
  );

  const countsResult = await pool.query<{ category: string; count: string; reviewed: string }>(
    `SELECT category,
            COUNT(*)::text AS count,
            COUNT(*) FILTER (WHERE reviewed)::text AS reviewed
     FROM feedback GROUP BY category`
  );

  const byCategory: Record<string, number> = {};
  let total = 0;
  let reviewed = 0;
  for (const row of countsResult.rows) {
    byCategory[row.category] = Number(row.count);
    total += Number(row.count);
    reviewed += Number(row.reviewed);
  }

  return {
    items: itemsResult.rows.map((row) => ({
      id: Number(row.id),
      name: row.name,
      category: row.category,
      message: row.message,
      reviewed: row.reviewed,
      createdAt: row.created_at.toISOString(),
    })),
    total: Number(totalResult.rows[0]?.count ?? 0),
    counts: { total, reviewed, byCategory },
  };
}

export async function setReviewed(id: number, reviewed: boolean): Promise<void> {
  const pool = getPool();
  if (!pool) throw new Error("No database configured");
  await ensureSchema();
  await pool.query("UPDATE feedback SET reviewed = $2 WHERE id = $1", [id, reviewed]);
}

export async function deleteFeedback(id: number): Promise<void> {
  const pool = getPool();
  if (!pool) throw new Error("No database configured");
  await ensureSchema();
  await pool.query("DELETE FROM feedback WHERE id = $1", [id]);
}
