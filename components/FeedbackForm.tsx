"use client";

import { useState } from "react";
import { FEEDBACK_CATEGORIES } from "@/lib/categories";

type Status = "idle" | "sending" | "success" | "error";

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [charCount, setCharCount] = useState(0);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          category: data.get("category"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setCharCount(0);
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Could not reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card grain relative overflow-hidden p-8 text-center sm:p-10" role="status">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-brand">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M4.5 12.5l5 5L19.5 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl">Thank you. Your voice is in.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Your submission goes privately to the Renaissance desk. It will be read, grouped
          with others, and only ever shared publicly as part of a reviewed, anonymised
          summary.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-outline mt-6"
        >
          Share another thought
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grain relative overflow-hidden p-6 sm:p-8" noValidate>
      <div className="mb-6 flex items-center gap-3">
        <span className="eyebrow">Private submission</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="fb-category" className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            What is this about? <span className="text-gold-deep">*</span>
          </label>
          <select id="fb-category" name="category" required className="field" defaultValue="">
            <option value="" disabled>
              Choose a category…
            </option>
            {FEEDBACK_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="fb-message" className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            Your concern, idea, or suggestion <span className="text-gold-deep">*</span>
          </label>
          <textarea
            id="fb-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={6}
            placeholder="Be as specific as you like. What is working, what needs to change, and what would make it better?"
            className="field resize-y"
            onChange={(event) => setCharCount(event.currentTarget.value.length)}
          />
          <p className="text-right font-mono text-[0.66rem] tracking-wide text-muted">
            {charCount}/2000
          </p>
        </div>

        <div className="grid gap-2">
          <label htmlFor="fb-name" className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            Name (optional)
          </label>
          <input
            id="fb-name"
            name="name"
            type="text"
            maxLength={80}
            placeholder="Leave blank to stay anonymous"
            className="field"
            autoComplete="name"
          />
        </div>

        <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="fb-website">Website</label>
          <input id="fb-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {status === "error" && (
          <p className="rounded-xl border border-danger/40 bg-danger/5 px-4 py-3 text-sm text-danger" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs text-xs leading-relaxed text-muted">
            Submissions are private: only the Renaissance desk can read them. Public
            summaries are anonymised, reviewed, and always state how many responses they
            cover.
          </p>
          <button type="submit" className="btn btn-dark shrink-0" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit privately"}
          </button>
        </div>
      </div>
    </form>
  );
}
