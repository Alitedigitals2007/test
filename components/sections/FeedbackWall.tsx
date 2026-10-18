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
        number="06"
        label="The Renaissance Feedback Wall"
        title="Have Your Say."
        intro="A vision for FASSA should not be built on assumptions about what students need. It should be informed by their experiences, concerns, and ideas."
      />

      <div className="reveal mb-14 grid gap-4 sm:grid-cols-3" role="list">
        {PROMPTS.map((prompt, index) => (
          <p
            key={prompt}
            role="listitem"
            className="card grain relative p-6 font-display text-xl leading-snug"
            style={delay(index * 90)}
          >
            {prompt}
          </p>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-6">
          <p className="reveal text-base leading-relaxed text-fg/90">
            The Renaissance Feedback Wall is a space for students to share concerns,
            propose improvements, and contribute ideas about the future of the Faculty of
            Science.
          </p>
          <p className="reveal text-base leading-relaxed text-muted" style={delay(80)}>
            Every submission can help inform a better understanding of student priorities.
            Feedback will be reviewed and grouped into themes to identify common concerns
            and possible areas for action.
          </p>
          <p className="reveal text-base leading-relaxed text-muted" style={delay(140)}>
            Whether your concern relates to welfare, infrastructure, academic support,
            communication, or opportunities for growth, your perspective can help inform
            the conversation.{" "}
            <span className="text-fg">Let us start by listening.</span>
          </p>

          <div className="reveal pt-4" style={delay(200)}>
            <p className="eyebrow mb-4">Suggested feedback categories</p>
            <ul className="flex flex-wrap gap-2.5">
              {FEEDBACK_CATEGORIES.map((category) => (
                <li key={category} className="chip text-muted">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card grain relative mt-4 p-6" style={delay(260)}>
            <p className="eyebrow mb-3 text-gold-deep">What we hear. What we learn.</p>
            <p className="text-sm leading-relaxed text-muted">
              No summary has been published yet. As responses are collected, this space
              will share the themes emerging from student feedback — and each published
              summary will state the number of responses received, the period covered, and
              its limitations. A voluntary survey never represents every FASSAite.
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
