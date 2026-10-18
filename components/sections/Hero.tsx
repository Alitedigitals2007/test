import Image from "next/image";
import OrbitCanvas from "@/components/OrbitCanvas";

const EQUATION = [
  { symbol: "S", label: "Service" },
  { symbol: "W", label: "Welfare" },
  { symbol: "I", label: "Infrastructure" },
  { symbol: "E", label: "Empowerment" },
];

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-bg-2 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <p className="hero-rise eyebrow flex flex-wrap items-center gap-3" style={{ animationDelay: "0.05s" }}>
            <span className="chip border-gold-deep text-gold-deep">Renaissance Movement · 001</span>
            <span>Faculty of Science Students&rsquo; Association · UI</span>
          </p>

          <h1 className="hero-rise mt-8" style={{ animationDelay: "0.15s" }}>
            <span className="font-display block text-[3.4rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.2rem]">
              Renaissance
            </span>
            <span className="script mt-1 block text-5xl text-gold-deep sm:text-6xl lg:text-[4.2rem]">
              Science of Service
            </span>
          </h1>

          <p className="hero-rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "0.3s" }}>
            A movement for inclusive representation, accountable leadership, and
            meaningful progress in FASSA.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.45s" }}>
            <a href="#vision" className="btn btn-gold">
              Explore the Renaissance
            </a>
            <a href="#feedback" className="btn btn-outline">
              Share your perspective
            </a>
          </div>

          <div className="hero-rise mt-12 border-t border-line pt-6" style={{ animationDelay: "0.6s" }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              The equation of service
            </p>
            <p className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              S <span className="mx-1 text-gold-deep">=</span> W{" "}
              <span className="mx-1 text-gold-deep">+</span> I{" "}
              <span className="mx-1 text-gold-deep">+</span> E
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {EQUATION.map((item) => (
                <li key={item.symbol} className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                  <span className="text-gold-deep">{item.symbol}</span> — {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-arch relative mx-auto w-full max-w-[24rem] lg:max-w-none">
          <OrbitCanvas className="hero-orbit absolute left-1/2 top-1/2 h-[125%] w-[150%] -translate-x-1/2 -translate-y-1/2" />
          <div className="arch relative border border-line-strong bg-bg-2 shadow-[var(--shadow)]">
            <Image
              src="/images/ajoje-hero.webp"
              alt="Portrait of Adedeji-Ajoje Daniel (Ajoje)"
              width={960}
              height={1200}
              priority
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand/55 to-transparent" aria-hidden="true" />
          </div>
          <div className="hero-rise mt-5 flex items-center justify-between gap-4" style={{ animationDelay: "0.75s" }}>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-muted">
              Adedeji-Ajoje Daniel
              <span className="mt-1 block text-gold-deep">AJOJE</span>
            </p>
            <p className="script text-2xl text-muted">the Renaissance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
