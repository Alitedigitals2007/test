"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const VISITOR_KEY = "renaissance-vid";

function visitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `v-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return "v-anonymous-visitor";
  }
}

function referrerHost(): string | null {
  try {
    if (!document.referrer) return null;
    const url = new URL(document.referrer);
    if (url.host === window.location.host) return null;
    return url.host;
  } catch {
    return null;
  }
}

function send(payload: Record<string, unknown>): void {
  const body = JSON.stringify(payload);
  try {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/track",
        new Blob([body], { type: "application/json" })
      );
      return;
    }
  } catch {
    /* fall through to fetch */
  }
  fetch("/api/track", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
    keepalive: true,
  }).catch(() => {});
}

function clickLabel(element: Element): string {
  const labelled =
    element.getAttribute("aria-label") ?? element.getAttribute("title");
  if (labelled) return labelled.trim().slice(0, 120);
  const text = element.textContent?.replace(/\s+/g, " ").trim();
  if (text) return text.slice(0, 120);
  if (element instanceof HTMLAnchorElement && element.href) {
    try {
      const url = new URL(element.href, window.location.href);
      return `${url.pathname}${url.search}` || "/";
    } catch {
      return "link";
    }
  }
  return element.tagName.toLowerCase();
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const trackedView = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    if (trackedView.current === pathname) return;
    const isFirst = trackedView.current === null;
    trackedView.current = pathname;
    send({
      type: "view",
      path: pathname,
      visitorId: visitorId(),
      referrer: isFirst ? referrerHost() : null,
    });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (window.location.pathname.startsWith("/admin")) return;
      const target = event.target as HTMLElement | null;
      const element = target?.closest?.("a, button");
      if (!element) return;
      const label = clickLabel(element);
      if (!label) return;
      send({
        type: "click",
        path: window.location.pathname,
        visitorId: visitorId(),
        target: label,
      });
    }
    document.addEventListener("click", onClick, { capture: true, passive: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
