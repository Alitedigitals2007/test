import { delay, Section, SectionHead } from "@/components/Section";

const STEPS = [
  ["Submitted", "A concern or idea is sent through the feedback channel."],
  ["Reviewed", "The Renaissance desk reads it, groups it, and confirms the facts."],
  ["Referred", "Where appropriate, it is taken to the relevant faculty or university authority."],
  ["Followed Up", "Progress and outcomes are tracked and communicated honestly."],
];

const TRACKER_EXAMPLE = [
  { label: "Proposed", status: "proposed", text: "Example: a clearer FAQ for common faculty processes." },
  { label: "Under Discussion", status: "discussion", text: "Example: faster reporting route for lecture-theatre faults." },
  { label: "In Progress", status: "progress", text: "Example: regular office-hours summary for transparency." },
];

export default function InsideFassa() {
  return (
    <Section id="inside">
      <SectionHead
        number="05"
        label="Inside FASSA"
        title="A Clearer View of Student Representation."
        intro="Open governance should be more than a statement of intent. It should be reflected in how students understand the work of their association."
      />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="eyebrow mb-6">From concern to action</p>
          <ol className="grid gap-5 sm:grid-cols-2">
            {STEPS.map(([title, body], index) => (
              <li key={title} className="card grain relative p-5" style={delay(index * 70)}>
                <span className="font-mono text-[0.68rem] tracking-[0.2em] text-gold-deep">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-2 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 space-y-6">
            <div className="reveal pillar">
              <h3 className="font-display text-2xl">Know the Office</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Explain the responsibilities of the FASSA President, other executives,
                committees, and representatives.
              </p>
            </div>
            <div className="reveal pillar" style={delay(80)}>
              <h3 className="font-display text-2xl">Periodic Reports</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Provide accessible summaries of activities, progress, and outstanding
                responsibilities.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal" style={delay(140)}>
          <div className="card grain relative overflow-hidden p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">Commitment tracker</p>
              <span className="chip border-warn text-warn">Layout example, not a live record</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Where applicable, the status of proposed or undertaken commitments is shown
              with clear labels:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {[
                ["Proposed", "status-proposed"],
                ["Under Discussion", "status-discussion"],
                ["In Progress", "status-progress"],
                ["Completed", "status-completed"],
                ["Delayed", "status-delayed"],
              ].map(([label, cls]) => (
                <li key={label} className={`chip ${cls}`}>
                  {label}
                </li>
              ))}
            </ul>

            <ul className="mt-8 space-y-4">
              {TRACKER_EXAMPLE.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-2 rounded-xl border border-line bg-bg-2/60 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-sm leading-relaxed">{item.text}</p>
                  <span className={`chip ${`status-${item.status}`} shrink-0 self-start sm:self-auto`}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              The rows above illustrate how the tracker will look. Nothing here describes a
              real commitment, and no initiative should be read as completed work.
            </p>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">
            The aim is to build a culture in which students can better understand the work
            of their representatives and evaluate progress on the basis of clear
            information.
          </p>
          <p className="mt-6 border-l-2 border-gold-deep pl-4 text-sm italic leading-relaxed text-fg/80">
            Open governance does not mean publishing every internal document. It means
            giving students useful, accurate information about responsibilities, decisions,
            progress, and outcomes while protecting confidential information.
          </p>
        </div>
      </div>
    </Section>
  );
}
