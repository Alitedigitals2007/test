import type { SiteSettings } from "@/lib/settings";

export default function Footer({ settings }: { settings: SiteSettings }) {
  const nav = [
    { href: "#meet", label: "Meet AJOJE" },
    { href: "#journey", label: "A Journey of Service" },
    { href: "#vision", label: "The Renaissance Vision" },
    { href: "#inside", label: "Inside FASSA" },
    { href: "#feedback", label: "The Feedback Wall" },
    { href: "#join", label: "Join the Movement" },
  ];

  const hashtags = ["#RENAISSANCE", "#AJOJE", "#ScienceOfService", "#FASSA"];

  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl">
              AJOJE <span className="italic text-gold-deep">the Renaissance</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A movement for inclusive representation, accountable leadership, and
              meaningful progress in the Faculty of Science.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {settings.manifesto && (
                <li>
                  <a
                    href={settings.manifesto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted hover:text-fg"
                  >
                    The Manifesto
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {hashtags.map((tag) => (
            <span key={tag} className="font-mono text-[0.68rem] tracking-[0.16em] text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-muted">
            This website presents the candidate&rsquo;s experience, vision, and proposals —
            not completed work, and not guarantees of outcomes beyond the authority of the
            office.
          </p>
          <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">
            Renaissance Movement · Faculty of Science, University of Ibadan
          </p>
        </div>
      </div>
    </footer>
  );
}
