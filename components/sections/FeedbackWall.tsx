import { delay, Section, SectionHead } from "@/components/Section";
import FeedbackForm from "@/components/FeedbackForm";

const PROMPTS = [
  "What should FASSA prioritise?",
  "What needs to change?",
  "What should we preserve and improve?",
];

export default function FeedbackWall() {
  return (
    <Section id="feedback" tone="alt">
      <SectionHead
        number="04"
        label="The Renaissance Feedback Wall"
        title="Have your say."
        intro="A vision for FASSA should not be built on assumptions about what students need. It should be informed by their experiences, concerns, and ideas."
      />

      <div className="reveal mb-14 grid gap-px border border-line bg-line sm:grid-cols-3" role="list" data-stagger="90">
        {PROMPTS.map((prompt) => (
          <p
            key={prompt}
            role="listitem"
            className="reveal bg-bg-2 p-6 font-display text-xl leading-snug"
          >
            {prompt}
          </p>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-6">
          <p className="reveal text-base leading-relaxed text-fg/90">
            The Feedback Wall is a space for students to share concerns, propose
            improvements, and contribute ideas about the future of the Faculty of Science.
            Every submission is reviewed and grouped into themes before anything is ever
            summarised publicly.
          </p>
          <p className="reveal text-base leading-relaxed text-muted" style={delay(80)}>
            Whatever your concern — welfare, infrastructure, academic support,
            communication, or opportunities — your perspective can shape the conversation.{" "}
            <span className="text-fg">Let us start by listening.</span>
          </p>

          <div className="reveal card p-6" style={delay(140)}>
            <p className="eyebrow mb-3 text-gold-deep">What we hear. What we learn.</p>
            <p className="text-sm leading-relaxed text-muted">
              No summary has been published yet. Each published summary will state the
              number of responses received, the period covered, and its limitations — a
              voluntary survey never represents every FASSAite.
            </p>
          </div>
        </div>

        <div className="reveal" style={delay(120)} data-layer="mid">
          <FeedbackForm />
        </div>
      </div>
    </Section>
  );
}
