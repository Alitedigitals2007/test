import { delay, Section } from "@/components/Section";

export default function FinalMessage() {
  return (
    <Section id="final" tone="brand" className="overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <p className="reveal eyebrow text-brand-fg/70">A final message from Ajoje</p>
        <h2 className="reveal font-display mt-5 text-4xl sm:text-5xl">
          The future of FASSA is a shared responsibility.
        </h2>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          <p className="reveal">
            Meaningful progress begins when we listen to one another, take responsibility
            for the challenges before us, and work together towards practical
            improvements.
          </p>
          <p className="reveal" style={delay(80)}>
            Renaissance is that belief in motion: welfare, infrastructure, empowerment,
            inclusivity, and accountable service. Thank you for being part of the
            conversation.
          </p>
        </div>

        <div className="reveal mt-14" style={delay(160)}>
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
