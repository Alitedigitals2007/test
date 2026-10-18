"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "#meet", label: "Meet Ajoje" },
  { href: "#journey", label: "The Journey" },
  { href: "#vision", label: "The Vision" },
  { href: "#inside", label: "Inside FASSA" },
  { href: "#feedback", label: "Feedback Wall" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-line bg-bg/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="group flex shrink-0 items-baseline gap-2" aria-label="Ajoje the Renaissance — back to top">
          <span className="font-display text-xl tracking-tight">Ajoje</span>
          <span className="font-display text-lg italic text-gold-deep transition-colors duration-300 group-hover:text-gold">
            the Renaissance
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href="#feedback" className="btn btn-gold !hidden !px-5 !py-2.5 sm:!inline-flex">
            Have your say
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted transition-colors hover:bg-bg-2 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#feedback"
            onClick={() => setOpen(false)}
            className="btn btn-gold mt-2 w-full sm:!hidden"
          >
            Have your say
          </a>
        </nav>
      </div>
    </header>
  );
}
