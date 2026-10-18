"use client";

import { useCallback, useState } from "react";

export default function CopyText({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const area = document.createElement("textarea");
      area.value = value;
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
      } finally {
        document.body.removeChild(area);
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, [value]);

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <span className="font-mono text-sm tracking-wide select-all">{value}</span>
      <button
        type="button"
        onClick={copy}
        className="chip text-muted hover:text-gold-deep"
        aria-label={`Copy ${value}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
