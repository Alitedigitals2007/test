"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FEEDBACK_CATEGORIES } from "@/lib/categories";
import type { SiteSettings } from "@/lib/settings";

type FeedbackItem = {
  id: number;
  name: string | null;
  category: string;
  message: string;
  reviewed: boolean;
  createdAt: string;
};

type FeedbackResponse = {
  items: FeedbackItem[];
  total: number;
  counts: { total: number; reviewed: number; byCategory: Record<string, number> };
};

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    credentials: "same-origin",
    headers: init?.body ? { "Content-Type": "application/json" } : undefined,
    ...init,
  });
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) {
    const error = new Error(data.error ?? "Request failed");
    (error as Error & { status?: number }).status = res.status;
    throw error;
  }
  return data;
}

export default function AdminPage() {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [configured, setConfigured] = useState(true);

  useEffect(() => {
    api<{ authenticated: boolean; configured: boolean }>("/api/admin/session")
      .then((data) => {
        setAuthed(data.authenticated);
        setConfigured(data.configured);
      })
      .catch(() => setAuthed(false))
      .finally(() => setChecking(false));
  }, []);

  if (checking) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-bg">
        <p className="eyebrow animate-pulse">Loading admin…</p>
      </main>
    );
  }

  if (!authed) {
    return <LoginScreen configured={configured} onSuccess={() => setAuthed(true)} />;
  }

  return <Dashboard onLogout={() => setAuthed(false)} />;
}

function LoginScreen({
  configured,
  onSuccess,
}: {
  configured: boolean;
  onSuccess: () => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await api("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="grain relative flex min-h-dvh items-center justify-center bg-bg px-5">
      <form onSubmit={submit} className="card w-full max-w-md p-8">
        <p className="font-display text-2xl">
          AJOJE <span className="script text-3xl text-gold-deep">the Renaissance</span>
        </p>
        <h1 className="eyebrow mt-6">Admin access</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This area is private. Only the Renaissance admin can read submissions and edit
          site links.
        </p>

        {!configured && (
          <p className="mt-5 rounded-xl border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
            Admin access is not configured on this deployment yet. Set ADMIN_PASSWORD and
            ADMIN_SESSION_SECRET in the environment first.
          </p>
        )}

        <label htmlFor="admin-password" className="eyebrow mt-6 block">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="field mt-2"
          autoComplete="current-password"
          required
        />

        {error && <p className="mt-4 text-sm text-danger">{error}</p>}

        <button type="submit" className="btn btn-gold mt-6 w-full" disabled={busy || !configured}>
          {busy ? "Checking…" : "Enter admin"}
        </button>

        <Link href="/" className="mt-5 block text-center font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted hover:text-fg">
          ← Back to the site
        </Link>
      </form>
    </main>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<"feedback" | "links">("feedback");

  async function logout() {
    try {
      await api("/api/admin/logout", { method: "POST" });
    } finally {
      onLogout();
    }
  }

  return (
    <main className="min-h-dvh bg-bg-2">
      <header className="border-b border-line bg-bg">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl">Admin</span>
            <span className="script text-2xl text-gold-deep">the Renaissance</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted hover:text-fg"
            >
              View site
            </Link>
            <button type="button" onClick={logout} className="btn btn-outline !px-4 !py-2">
              Log out
            </button>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-5xl gap-1 px-5 sm:px-8">
          {(["feedback", "links"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`border-b-2 px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                tab === item
                  ? "border-gold-deep text-fg"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {item === "feedback" ? "Feedback inbox" : "Links & contact"}
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
        {tab === "feedback" ? <FeedbackInbox onAuthError={onLogout} /> : <LinksEditor onAuthError={onLogout} />}
      </div>
    </main>
  );
}

function FeedbackInbox({ onAuthError }: { onAuthError: () => void }) {
  const [data, setData] = useState<FeedbackResponse | null>(null);
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState<"all" | "new" | "reviewed">("all");
  const [page, setPage] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    api<FeedbackResponse>(
      `/api/admin/feedback?category=${encodeURIComponent(category)}&status=${status}&page=${page}`
    )
      .then((result) => {
        if (!alive) return;
        setData(result);
        setError("");
      })
      .catch((err) => {
        if (!alive) return;
        if ((err as { status?: number }).status === 401) {
          onAuthError();
          return;
        }
        setError(err instanceof Error ? err.message : "Could not load feedback");
      });
    return () => {
      alive = false;
    };
  }, [category, status, page, refreshKey, onAuthError]);

  const reload = () => setRefreshKey((key) => key + 1);

  const totalPages = data ? Math.max(1, Math.ceil(data.total / 20)) : 1;

  async function toggleReviewed(item: FeedbackItem) {
    setBusyId(item.id);
    try {
      await api(`/api/admin/feedback/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify({ reviewed: !item.reviewed }),
      });
      reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update");
    } finally {
      setBusyId(null);
    }
  }

  async function remove(item: FeedbackItem) {
    if (!window.confirm("Delete this submission permanently?")) return;
    setBusyId(item.id);
    try {
      await api(`/api/admin/feedback/${item.id}`, { method: "DELETE" });
      reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total submissions" value={data?.counts.total ?? "—"} />
        <StatCard label="Awaiting review" value={data ? data.counts.total - data.counts.reviewed : "—"} />
        <StatCard label="Reviewed" value={data?.counts.reviewed ?? "—"} />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="field !w-auto"
          aria-label="Filter by category"
        >
          <option value="all">All categories</option>
          {FEEDBACK_CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value as typeof status);
            setPage(1);
          }}
          className="field !w-auto"
          aria-label="Filter by status"
        >
          <option value="all">All statuses</option>
          <option value="new">Awaiting review</option>
          <option value="reviewed">Reviewed</option>
        </select>

        <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
          {data ? `${data.total} submission${data.total === 1 ? "" : "s"}` : ""}
        </span>
      </div>

      {error && <p className="mt-6 rounded-xl border border-danger/40 bg-danger/5 px-4 py-3 text-sm text-danger">{error}</p>}

      <ul className="mt-6 space-y-4">
        {data?.items.map((item) => (
          <li
            key={item.id}
            className={`card p-5 transition-opacity ${item.reviewed ? "opacity-70" : ""}`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip text-muted">{item.category}</span>
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                {dateFormat.format(new Date(item.createdAt))}
              </span>
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-gold-deep">
                {item.name ?? "Anonymous"}
              </span>
              {item.reviewed && <span className="chip status-completed">Reviewed</span>}
            </div>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed">{item.message}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => toggleReviewed(item)}
                disabled={busyId === item.id}
                className="btn btn-outline !px-4 !py-2"
              >
                {item.reviewed ? "Mark as new" : "Mark reviewed"}
              </button>
              <button
                type="button"
                onClick={() => remove(item)}
                disabled={busyId === item.id}
                className="btn !px-4 !py-2 text-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {data && data.items.length === 0 && (
        <div className="card mt-6 p-10 text-center">
          <p className="font-display text-xl">No submissions here yet.</p>
          <p className="mt-2 text-sm text-muted">
            New feedback from the site will appear in this inbox.
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            className="btn btn-outline !px-4 !py-2"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </button>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            className="btn btn-outline !px-4 !py-2"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="card p-5">
      <p className="eyebrow">{label}</p>
      <p className="font-display mt-2 text-4xl">{value}</p>
    </div>
  );
}

function LinksEditor({ onAuthError }: { onAuthError: () => void }) {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api<{ settings: SiteSettings }>("/api/admin/settings")
      .then((data) => setSettings(data.settings))
      .catch((err) => {
        if ((err as { status?: number }).status === 401) {
          onAuthError();
          return;
        }
        setError(err instanceof Error ? err.message : "Could not load settings");
      });
  }, [onAuthError]);

  const fields = useMemo(
    () =>
      settings
        ? ([
            ["whatsappNumber", "WhatsApp number", "Shown as selectable text with a copy button, plus a chat button."],
            ["whatsappGroup", "WhatsApp group link", "Powers the “Join the WhatsApp group” button."],
            ["instagram", "Instagram link", "Appears under “Also find Renaissance on” when set."],
            ["x", "X (Twitter) link", "Appears under “Also find Renaissance on” when set."],
            ["email", "Email address", "Appears as contact text and a mail link when set."],
            ["manifesto", "Manifesto link", "Powers the “Explore the manifesto” buttons. Until set, they show “Link to be added”."],
          ] as const)
        : [],
    [settings]
  );

  async function save(event: React.FormEvent) {
    event.preventDefault();
    if (!settings) return;
    setBusy(true);
    setSaved(false);
    setError("");
    try {
      await api("/api/admin/settings", {
        method: "PUT",
        body: JSON.stringify(settings),
      });
      setSaved(true);
      window.setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      if ((err as { status?: number }).status === 401) {
        onAuthError();
        return;
      }
      setError(err instanceof Error ? err.message : "Could not save settings");
    } finally {
      setBusy(false);
    }
  }

  if (!settings && !error) {
    return <p className="eyebrow animate-pulse">Loading settings…</p>;
  }

  return (
    <form onSubmit={save} className="max-w-2xl">
      <p className="text-sm leading-relaxed text-muted">
        These links power the buttons across the site. Leave a field empty to hide that
        item — it will appear automatically once you add it.
      </p>

      <div className="mt-8 grid gap-6">
        {fields.map(([field, label, hint]) => (
          <div key={field}>
            <label htmlFor={`setting-${field}`} className="eyebrow block">
              {label}
            </label>
            <input
              id={`setting-${field}`}
              type="text"
              value={settings?.[field] ?? ""}
              onChange={(e) =>
                setSettings((prev) => (prev ? { ...prev, [field]: e.target.value } : prev))
              }
              className="field mt-2"
              placeholder={field === "whatsappNumber" ? "e.g. 0810 188 0844" : "https://…"}
            />
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{hint}</p>
          </div>
        ))}
      </div>

      {error && <p className="mt-6 text-sm text-danger">{error}</p>}

      <div className="mt-8 flex items-center gap-4">
        <button type="submit" className="btn btn-gold" disabled={busy}>
          {busy ? "Saving…" : "Save links"}
        </button>
        {saved && <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ok">Saved — live shortly</span>}
      </div>
    </form>
  );
}
