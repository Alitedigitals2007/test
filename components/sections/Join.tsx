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
        number="07"
        label="Join the Renaissance Movement"
        title="A Movement Is Only as Strong as the People Who Shape It."
        intro="Renaissance is an invitation to participate in a better conversation about student leadership."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-fg/90">
          <p className="reveal">
            We welcome students who want to share ideas, contribute their skills, identify
            challenges, support constructive discussions, or help develop practical
            solutions for the Faculty of Science.
          </p>
          <p className="reveal" style={delay(80)}>
            You do not need to hold a position to contribute. You do not need to have all
            the answers to be part of the conversation.
          </p>
          <p className="reveal" style={delay(140)}>
            What matters is a willingness to listen, participate, and contribute
            meaningfully.
          </p>
          <p className="reveal" style={delay(200)}>
            If you believe student representation can be more inclusive, more accountable,
            and more responsive, there is room for you in this conversation.
          </p>

          {whatsappNumber && (
            <div className="reveal card grain relative mt-8 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between" style={delay(240)}>
              <div>
                <p className="eyebrow mb-2">WhatsApp</p>
                <CopyText value={whatsappNumber} />
              </div>
              <a
                href={`https://wa.me/${whatsappDigits(whatsappNumber)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline shrink-0"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>

        <div className="grid gap-5 self-start">
          <article className="reveal card grain relative p-6 transition-transform duration-300 hover:-translate-y-1" style={delay(80)}>
            <p className="eyebrow text-gold-deep">Share an idea</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Bring a concern, a suggestion, or a solution. Every submission is read
              privately by the Renaissance desk.
            </p>
            <a href="#feedback" className="btn btn-dark mt-5 w-full sm:w-auto">
              Share an idea
            </a>
          </article>

          <article className="reveal card grain relative p-6 transition-transform duration-300 hover:-translate-y-1" style={delay(160)}>
            <p className="eyebrow text-gold-deep">Connect with Renaissance</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Join the conversation where ideas, updates, and open discussions are shared.
            </p>
            {whatsappGroup ? (
              <a
                href={whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold mt-5 w-full sm:w-auto"
              >
                Join the WhatsApp group
              </a>
            ) : (
              <div className="mt-5">
                <span className="btn btn-outline w-full sm:w-auto" aria-disabled="true">
                  Connect with Renaissance
                </span>
                <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                  Link to be added
                </p>
              </div>
            )}
          </article>

          <article className="reveal card grain relative p-6 transition-transform duration-300 hover:-translate-y-1" style={delay(240)}>
            <p className="eyebrow text-gold-deep">Explore the manifesto</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Read the full Renaissance manuscript — the journey, the vision, and the
              commitment behind Science of Service.
            </p>
            {manifesto ? (
              <a
                href={manifesto}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-5 w-full sm:w-auto"
              >
                Explore the manifesto
              </a>
            ) : (
              <div className="mt-5">
                <span className="btn btn-outline w-full sm:w-auto" aria-disabled="true">
                  Explore the manifesto
                </span>
                <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                  Link to be added
                </p>
              </div>
            )}
          </article>

          {socials.length > 0 && (
            <div className="reveal pt-2" style={delay(300)}>
              <p className="eyebrow mb-4">Also find Renaissance on</p>
              <ul className="flex flex-wrap gap-3">
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
