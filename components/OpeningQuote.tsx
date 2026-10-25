import { delay } from "@/components/Section";

export default function OpeningQuote() {
  return (
    <section
      aria-label="The belief behind this movement"
      className="relative bg-brand text-brand-fg"
    >
      <div className="h-px w-full bg-gold/60" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <blockquote className="reveal" data-layer="near">
          <p className="eyebrow text-gold/90">Leadership begins with service</p>
          <p className="font-display mt-6 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]">
            &ldquo;Everybody can be great, because everybody can serve.&rdquo;
          </p>
          <footer className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.26em] text-gold">
            Martin Luther King Jr.
          </footer>
        </blockquote>

        <div className="reveal border-t border-brand-fg/15 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0" data-layer="mid" style={delay(150)}>
          <p className="text-base leading-relaxed text-brand-fg/90 sm:text-lg">
            I believe the number one priority of every student leader is the{" "}
            <strong className="font-semibold text-brand-fg">
              welfare of the people they serve
            </strong>
            . That belief is the heart of Renaissance.
          </p>
          <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.26em] text-brand-fg/70">
            Adedeji-Ajoje Daniel · AJOJE
          </p>
        </div>
      </div>
    </section>
  );
}
