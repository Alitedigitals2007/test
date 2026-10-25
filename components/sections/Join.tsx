import { delay, Section, SectionHead } from "@/components/Section";
import CopyText from "@/components/CopyText";
import type { SiteSettings } from "@/lib/settings";

function whatsappDigits(number: string): string {
  const digits = number.replace(/\D/g, "");
  if (digits.startsWith("0")) return `234${digits.slice(1)}`;
  return digits;
}

export default function Join({ settings }: { settings: SiteSettings }) {
  const { whatsappNumber, whatsappGroup, instagram, x, email, manifesto } = settings;

  const socials = [
    whatsappNumber ? { label: "WhatsApp", href: `https://wa.me/${whatsappDigits(whatsappNumber)}` } : null,
    instagram ? { label: "Instagram", href: instagram } : null,
    x ? { label: "X (Twitter)", href: x } : null,
    email ? { label: "Email", href: `mailto:${email}` } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <Section id="join">
      <SectionHead
        number="05"
        label="Join the Renaissance Movement"
        title="A movement is only as strong as the people who shape it."
        intro="You do not need a position to contribute. You do not need all the answers to be part of the conversation."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-fg/90">
          <p className="reveal">
            Renaissance welcomes students who want to share ideas, contribute their
            skills, and help develop practical solutions for the Faculty of Science.
          </p>
          <p className="reveal" style={delay(80)}>
            If you believe student representation can be more inclusive, more accountable,
            and more responsive, there is room for you in this conversation.
          </p>
          <p className="reveal mt-8 font-display text-3xl leading-tight sm:text-4xl" style={delay(140)}>
            Listen. Participate.{" "}
            <span className="italic text-gold-deep">Contribute meaningfully.</span>
          </p>
        </div>

        <div className="grid gap-5 self-start">
          <article className="reveal card p-6 sm:p-7" style={delay(80)} data-layer="mid">
            <p className="eyebrow text-gold-deep">Connect with Renaissance</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Join the conversation where ideas, updates, and open discussions are shared.
            </p>
            {whatsappGroup ? (
              <a
                href={whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg mt-6 w-full"
              >
                Join the movement on WhatsApp
              </a>
            ) : (
              <div className="mt-6">
                <span className="btn btn-outline btn-lg w-full" aria-disabled="true">
                  Join the movement
                </span>
                <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                  Link to be added
                </p>
              </div>
            )}
            {whatsappNumber && (
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
                <span className="font-mono uppercase tracking-[0.18em]">Or reach the desk:</span>
                <CopyText value={whatsappNumber} />
              </p>
            )}
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="reveal card flex flex-col p-6" style={delay(160)} data-layer="mid">
              <p className="eyebrow text-gold-deep">Share an idea</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                Bring a concern, a suggestion, or a solution. Every submission is read
                privately by the Renaissance desk.
              </p>
              <a href="#feedback" className="btn btn-dark mt-5 w-full">
                Share an idea
              </a>
            </article>

            <article className="reveal card flex flex-col p-6" style={delay(220)} data-layer="mid">
              <p className="eyebrow text-gold-deep">Explore the manifesto</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                The full Renaissance manuscript — the journey, the vision, and the
                commitment behind Science of Service.
              </p>
              {manifesto ? (
                <a
                  href={manifesto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline mt-5 w-full"
                >
                  Explore the manifesto
                </a>
              ) : (
                <div className="mt-5">
                  <span className="btn btn-outline w-full" aria-disabled="true">
                    Explore the manifesto
                  </span>
                  <p className="mt-2 text-center font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                    Link to be added
                  </p>
                </div>
              )}
            </article>
          </div>

          {socials.length > 0 && (
            <div className="reveal" style={delay(280)}>
              <p className="eyebrow mb-4">Also find Renaissance on</p>
              <ul className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip text-muted hover:text-gold-deep"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
