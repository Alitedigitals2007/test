import { cacheLife, cacheTag } from "next/cache";
import { ensureSchema, getPool } from "./db";

export type SiteSettings = {
  whatsappNumber: string;
  whatsappGroup: string;
  instagram: string;
  x: string;
  email: string;
  manifesto: string;
};

export const SETTINGS_DEFAULTS: SiteSettings = {
  whatsappNumber: "0810 188 0844",
  whatsappGroup: "https://chat.whatsapp.com/HzTQKgtzGKfH81koTtZUKN?s=cl&p=a&ilr=0",
  instagram: "",
  x: "",
  email: "",
  manifesto: "",
};

export const SETTING_KEYS = [
  "whatsapp_number",
  "whatsapp_group",
  "instagram",
  "x",
  "email",
  "manifesto",
] as const;

export type SettingKey = (typeof SETTING_KEYS)[number];

const KEY_TO_FIELD: Record<SettingKey, keyof SiteSettings> = {
  whatsapp_number: "whatsappNumber",
  whatsapp_group: "whatsappGroup",
  instagram: "instagram",
  x: "x",
  email: "email",
  manifesto: "manifesto",
};

export async function getSettings(): Promise<SiteSettings> {
  "use cache";
  cacheTag("settings");
  cacheLife("max");

  const pool = getPool();
  if (!pool) return SETTINGS_DEFAULTS;

  try {
    await ensureSchema();
    const { rows } = await pool.query<{ key: string; value: string }>(
      "SELECT key, value FROM settings"
    );
    const settings = { ...SETTINGS_DEFAULTS };
    for (const row of rows) {
      if ((SETTING_KEYS as readonly string[]).includes(row.key)) {
        settings[KEY_TO_FIELD[row.key as SettingKey]] = row.value;
      }
    }
    return settings;
  } catch (err) {
    console.error("getSettings failed, falling back to defaults", err);
    return SETTINGS_DEFAULTS;
  }
}

export async function saveSettings(values: Partial<SiteSettings>): Promise<void> {
  const pool = getPool();
  if (!pool) throw new Error("No database configured");
  await ensureSchema();

  const entries = Object.entries(values).filter(([field]) =>
    (Object.values(KEY_TO_FIELD) as string[]).includes(field)
  );
  if (entries.length === 0) return;

  for (const [field, value] of entries) {
    const key = (Object.keys(KEY_TO_FIELD) as SettingKey[]).find(
      (k) => KEY_TO_FIELD[k] === field
    );
    if (!key) continue;
    await pool.query(
      `INSERT INTO settings (key, value, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()`,
      [key, String(value ?? "").trim()]
    );
  }
}
