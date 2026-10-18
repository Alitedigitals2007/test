import { delay, Section, SectionHead } from "@/components/Section";
import FeedbackForm from "@/components/FeedbackForm";
import { FEEDBACK_CATEGORIES } from "@/lib/categories";

const PROMPTS = [
  "What should FASSA prioritise?",
  "What needs to change?",
  "What should we preserve and improve?",
];

export default function FeedbackWall() {
  return (
    <Section id="feedback" tone="alt">
      <SectionHead
        number="05"
        label="The Renaissance Feedback Wall"
        title="Have your say."
        intro="A vision for FASSA should not be built on assumptions about what students need. It should be informed by their experiences, concerns, and ideas."
      />

      <div className="reveal mb-14 grid gap-px border border-line bg-line sm:grid-cols-3" role="list">
        {PROMPTS.map((prompt, index) => (
          <p
            key={prompt}
            role="listitem"
            className="bg-bg-2 p-6 font-display text-xl leading-snug"
            style={delay(index * 90)}
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

          <div className="reveal pt-2" style={delay(140)}>
            <p className="eyebrow mb-4">Suggested feedback categories</p>
            <ul className="flex flex-wrap gap-2">
              {FEEDBACK_CATEGORIES.map((category) => (
                <li key={category} className="chip text-muted">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card p-6" style={delay(200)}>
            <p className="eyebrow mb-3 text-gold-deep">What we hear. What we learn.</p>
            <p className="text-sm leading-relaxed text-muted">
              No summary has been published yet. Each published summary will state the
              number of responses received, the period covered, and its limitations — a
              voluntary survey never represents every FASSAite.
            </p>
          </div>
        </div>

        <div className="reveal" style={delay(120)}>
          <FeedbackForm />
        </div>
      </div>
    </Section>
  );
}
