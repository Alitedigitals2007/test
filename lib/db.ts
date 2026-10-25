import { Pool } from "pg";

declare global {
  var __renaissancePool: Pool | undefined;
  var __renaissanceSchema: Promise<void> | undefined;
}

const connectionString = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;

export function getPool(): Pool | null {
  if (!connectionString) return null;
  if (!global.__renaissancePool) {
    const isLocal = /localhost|127\.0\.0\.1/.test(connectionString);
    global.__renaissancePool = new Pool({
      connectionString,
      max: 3,
      ssl: isLocal ? undefined : { rejectUnauthorized: false },
    });
    global.__renaissancePool.on("error", (err) => {
      console.error("Unexpected Postgres pool error", err);
    });
  }
  return global.__renaissancePool;
}

export function ensureSchema(): Promise<void> {
  if (!global.__renaissanceSchema) {
    global.__renaissanceSchema = (async () => {
      const pool = getPool();
      if (!pool) return;
      await pool.query(`
        CREATE TABLE IF NOT EXISTS feedback (
          id BIGSERIAL PRIMARY KEY,
          name TEXT,
          category TEXT NOT NULL,
          message TEXT NOT NULL,
          reviewed BOOLEAN NOT NULL DEFAULT FALSE,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        ALTER TABLE feedback ADD COLUMN IF NOT EXISTS category TEXT;
        CREATE INDEX IF NOT EXISTS feedback_created_at_idx ON feedback (created_at DESC);
        CREATE TABLE IF NOT EXISTS settings (
          key TEXT PRIMARY KEY,
          value TEXT NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE TABLE IF NOT EXISTS events (
          id BIGSERIAL PRIMARY KEY,
          type TEXT NOT NULL,
          path TEXT NOT NULL,
          target TEXT,
          visitor_id TEXT NOT NULL,
          referrer TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE INDEX IF NOT EXISTS events_created_at_idx ON events (created_at DESC);
        CREATE INDEX IF NOT EXISTS events_type_created_at_idx ON events (type, created_at DESC);
      `);
    })().catch((err) => {
      global.__renaissanceSchema = undefined;
      throw err;
    });
  }
  return global.__renaissanceSchema;
}
