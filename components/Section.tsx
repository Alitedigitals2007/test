import type { ReactNode } from "react";

const TONES = {
  base: "bg-bg",
  alt: "bg-bg-2",
  brand: "bg-brand text-brand-fg",
} as const;

export function Section({
  id,
  tone = "base",
  className,
  innerClassName,
  children,
}: {
  id?: string;
  tone?: keyof typeof TONES;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative ${TONES[tone]} ${className ?? ""}`}>
      <div className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24 ${innerClassName ?? ""}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  number,
  label,
  title,
  intro,
  dark = false,
  titleClassName,
}: {
  number?: string;
  label: string;
  title: string;
  intro?: ReactNode;
  dark?: boolean;
  titleClassName?: string;
}) {
  return (
    <div className="reveal mb-10 max-w-3xl sm:mb-14">
      <p className="eyebrow flex items-center gap-3">
        {number && <span className={dark ? "text-gold" : "text-gold-deep"}>{number}</span>}
        <span className={`h-px w-10 ${dark ? "bg-brand-fg/30" : "bg-line"}`} aria-hidden="true" />
        <span className={dark ? "text-brand-fg/70" : ""}>{label}</span>
      </p>
      <h2 className={`font-display mt-5 text-balance text-4xl sm:text-5xl ${titleClassName ?? ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-brand-fg/80" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function delay(ms: number): React.CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as React.CSSProperties;
}
