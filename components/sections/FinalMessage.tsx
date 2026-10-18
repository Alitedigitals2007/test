import { delay, Section } from "@/components/Section";

export default function FinalMessage() {
  return (
    <Section id="final" tone="brand" className="grain overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <p className="reveal eyebrow text-brand-fg/70">A final message from Ajoje</p>
        <h2 className="reveal font-display mt-5 text-4xl sm:text-5xl">
          The Future of FASSA Is a Shared Responsibility.
        </h2>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          <p className="reveal">
            I believe meaningful progress begins when we listen to one another, take
            responsibility for the challenges before us, and work together towards
            practical improvements.
          </p>
          <p className="reveal" style={delay(80)}>
            Renaissance represents that belief: a commitment to welfare, infrastructure,
            empowerment, inclusivity, and accountable service.
          </p>
          <p className="reveal" style={delay(140)}>
            This is bigger than a slogan. It is an invitation to think critically about the
            faculty we have, the faculty we aspire to build, and the role each of us can
            play in that journey.
          </p>
          <p className="reveal" style={delay(200)}>
            Thank you for being part of the conversation.
          </p>
        </div>

        <div className="reveal mt-14" style={delay(260)}>
          <p className="text-sm text-brand-fg/70">With purpose and a commitment to service,</p>
          <p className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
            AJOJE THE RENAISSANCE <span aria-hidden="true">⏳❤️</span>
          </p>
          <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.3em] text-gold">
            Renaissance — Science of Service
          </p>
        </div>
      </div>
    </Section>
  );
}
