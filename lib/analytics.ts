import { ensureSchema, getPool } from "./db";

export type TrackEventInput = {
  type: "view" | "click";
  path: string;
  target?: string | null;
  visitorId: string;
  referrer?: string | null;
};

export async function recordEvent(input: TrackEventInput): Promise<void> {
  const pool = getPool();
  if (!pool) throw new Error("No database configured");
  await ensureSchema();
  await pool.query(
    "INSERT INTO events (type, path, target, visitor_id, referrer) VALUES ($1, $2, $3, $4, $5)",
    [input.type, input.path, input.target ?? null, input.visitorId, input.referrer ?? null]
  );
}

export type AnalyticsSummary = {
  totals: { views: number; clicks: number; visitors: number };
  last7Days: { views: number; visitors: number };
  viewsByDay: { date: string; views: number }[];
  topPages: { path: string; views: number }[];
  topClicks: { target: string; clicks: number }[];
  referrers: { referrer: string; visits: number }[];
};

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  const pool = getPool();
  if (!pool) throw new Error("No database configured");
  await ensureSchema();

  const [totals, last7, byDay, pages, clicks, referrers] = await Promise.all([
    pool.query<{ views: number; clicks: number; visitors: number }>(
      `SELECT
         (COUNT(*) FILTER (WHERE type = 'view'))::int AS views,
         (COUNT(*) FILTER (WHERE type = 'click'))::int AS clicks,
         (COUNT(DISTINCT visitor_id) FILTER (WHERE type = 'view'))::int AS visitors
       FROM events`
    ),
    pool.query<{ views: number; visitors: number }>(
      `SELECT
         COUNT(*)::int AS views,
         COUNT(DISTINCT visitor_id)::int AS visitors
       FROM events
       WHERE type = 'view' AND created_at > NOW() - INTERVAL '7 days'`
    ),
    pool.query<{ date: string; views: number }>(
      `SELECT to_char(day, 'YYYY-MM-DD') AS date, COUNT(e.id)::int AS views
       FROM generate_series(CURRENT_DATE - INTERVAL '13 days', CURRENT_DATE, INTERVAL '1 day') AS day
       LEFT JOIN events e
         ON e.type = 'view' AND e.created_at::date = day::date
       GROUP BY day
       ORDER BY day`
    ),
    pool.query<{ path: string; views: number }>(
      `SELECT path, COUNT(*)::int AS views
       FROM events
       WHERE type = 'view'
       GROUP BY path
       ORDER BY views DESC, path
       LIMIT 8`
    ),
    pool.query<{ target: string; clicks: number }>(
      `SELECT target, COUNT(*)::int AS clicks
       FROM events
       WHERE type = 'click' AND target IS NOT NULL
       GROUP BY target
       ORDER BY clicks DESC, target
       LIMIT 8`
    ),
    pool.query<{ referrer: string; visits: number }>(
      `SELECT referrer, COUNT(*)::int AS visits
       FROM events
       WHERE type = 'view' AND referrer IS NOT NULL AND referrer <> ''
       GROUP BY referrer
       ORDER BY visits DESC, referrer
       LIMIT 5`
    ),
  ]);

  const totalsRow = totals.rows[0];
  const last7Row = last7.rows[0];

  return {
    totals: {
      views: totalsRow?.views ?? 0,
      clicks: totalsRow?.clicks ?? 0,
      visitors: totalsRow?.visitors ?? 0,
    },
    last7Days: {
      views: last7Row?.views ?? 0,
      visitors: last7Row?.visitors ?? 0,
    },
    viewsByDay: byDay.rows.map((row) => ({ date: row.date, views: row.views })),
    topPages: pages.rows,
    topClicks: clicks.rows,
    referrers: referrers.rows,
  };
}
