import { delay, Section, SectionHead } from "@/components/Section";

const STEPS = [
  ["Submitted", "A concern or idea is sent through the feedback channel."],
  ["Reviewed", "The Renaissance desk reads it, groups it, and confirms the facts."],
  ["Referred", "Where appropriate, it goes to the relevant faculty or university authority."],
  ["Followed up", "Progress and outcomes are tracked and communicated honestly."],
];

const TRACKER_EXAMPLE = [
  { label: "Proposed", status: "proposed", text: "Example: a clearer FAQ for common faculty processes." },
  { label: "In discussion", status: "discussion", text: "Example: a faster reporting route for lecture-theatre faults." },
  { label: "In progress", status: "progress", text: "Example: regular office-hours summaries for transparency." },
];

const OFFICE_NOTES = [
  ["Know the office", "The responsibilities of the FASSA President, executives, committees, and representatives — explained plainly."],
  ["Periodic reports", "Accessible summaries of activities, progress, and outstanding responsibilities."],
];

export default function InsideFassa() {
  return (
    <Section id="inside">
      <SectionHead
        number="04"
        label="Inside FASSA"
        title="A clearer view of student representation."
        intro="Open governance should be more than a statement of intent. It should shape how students understand the work of their association."
      />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="eyebrow mb-6">From concern to action</p>
          <ol className="grid gap-4 sm:grid-cols-2">
            {STEPS.map(([title, body], index) => (
              <li key={title} className="card p-5" style={delay(index * 70)}>
                <span className="font-mono text-[0.68rem] tracking-[0.2em] text-gold-deep">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-2 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 divide-y divide-line border-y border-line">
            {OFFICE_NOTES.map(([title, body], index) => (
              <div key={title} className="reveal py-5" style={delay(80 + index * 60)}>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={delay(140)}>
          <div className="card p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">Commitment tracker</p>
              <span className="chip border-warn text-warn">Layout example, not a live record</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Where applicable, commitments are shown with clear status labels:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {[
                ["Proposed", "status-proposed"],
                ["Under discussion", "status-discussion"],
                ["In progress", "status-progress"],
                ["Completed", "status-completed"],
                ["Delayed", "status-delayed"],
              ].map(([label, cls]) => (
                <li key={label} className={`chip ${cls}`}>
                  {label}
                </li>
              ))}
            </ul>

            <ul className="mt-7 space-y-3">
              {TRACKER_EXAMPLE.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-2 border border-line bg-bg-2/60 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-sm leading-relaxed">{item.text}</p>
                  <span className={`chip ${`status-${item.status}`} shrink-0 self-start sm:self-auto`}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              The rows above illustrate the tracker&apos;s layout only. Nothing here
              describes a real commitment.
            </p>
          </div>

          <p className="mt-8 border-l-2 border-gold-deep pl-4 text-sm italic leading-relaxed text-fg/80">
            Open governance does not mean publishing every internal document. It means
            giving students useful, accurate information about responsibilities, decisions,
            and progress — while protecting confidential material.
          </p>
        </div>
      </div>
    </Section>
  );
}
