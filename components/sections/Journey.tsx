import { delay, Section, SectionHead } from "@/components/Section";

const RECORD = [
  {
    period: "2022",
    roles: ["Participant, Queen's Commonwealth Essay Competition (QCEC)"],
  },
  {
    period: "2024",
    roles: [
      "Participant, Climate Science Olympiad",
      "Logistics Member, Innotech 3.0",
    ],
  },
  {
    period: "2024–2025",
    roles: [
      "Assistant General Secretary, NAPS",
      "Vice-Chairperson, FASSA Freshers' Help Desk Committee",
      "Member, NAPS Week",
      "Member, CBN LT Maintenance Committee",
      "Member, Kuti @ 70 Publicity Team",
    ],
  },
  {
    period: "2024–present",
    roles: [
      "Member, FLT TDB Committee",
      "Member, FASSA Freshers' Supporters Committee",
    ],
  },
  {
    period: "2025",
    roles: [
      "Member, Impact UI Core Publicity Team",
      "Publicity Member, AI or Die",
      "Member, FASSA Week Publicity Team",
      "Member, FASSA PR Cornerstone",
    ],
  },
  {
    period: "2025–2026",
    roles: [
      "General Secretary, Israel Oludotun Ransome-Kuti Hall",
      "Co-Chairperson, FASSA Freshers' Help Desk Committee",
      "Member, UI Students' Union Help Desk Committee",
      "Member, Ibiza PR Team",
    ],
  },
  {
    period: "2026",
    roles: [
      "Co-Head, Personality Lecture, Kuti Hall Week",
      "Volunteer, NAPS UI Inaugural Lecture",
    ],
  },
];

const TIMELINE = RECORD.flatMap((group) =>
  group.roles.map((role) => ({ period: group.period, role }))
);

const COLUMNS = [
  TIMELINE.slice(0, Math.ceil(TIMELINE.length / 2)),
  TIMELINE.slice(Math.ceil(TIMELINE.length / 2)),
];

const LESSONS = [
  ["Administration", "Documentation, correspondence, and coordination that keep commitments moving."],
  ["Student support", "Helping students navigate faculty life, from first year onward."],
  ["Collaboration", "Publicity teams, committees, and lecture planning built on teamwork."],
  ["Science", "Evidence, curiosity, and applying knowledge to wider problems."],
];

export default function Journey() {
  return (
    <Section id="journey">
      <SectionHead
        number="02"
        label="A Journey of Service"
        title="Service is a journey, not a title."
        intro="The roles I have held so far — and what each one taught me about leadership."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16">
        {COLUMNS.map((items, columnIndex) => (
          <ol
            key={columnIndex}
            className="relative space-y-6 border-l border-line-strong pl-7"
          >
            {items.map((item, index) => (
              <li
                key={`${item.period}-${item.role}`}
                className="reveal relative"
                style={delay(columnIndex * 80 + index * 40)}
              >
                <span
                  className="absolute -left-[2.13rem] top-1.5 h-2.5 w-2.5 rounded-full border border-gold-deep bg-gold"
                  aria-hidden="true"
                />
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold-deep">
                  {item.period}
                </p>
                <p className="mt-1 text-[0.98rem] leading-relaxed">{item.role}</p>
              </li>
            ))}
          </ol>
        ))}
      </div>

      <div className="reveal mt-14" style={delay(120)}>
        <p className="eyebrow mb-6">What the journey taught me</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LESSONS.map(([title, body], index) => (
            <div
              key={title}
              className="reveal border-t border-line-strong pt-4"
              style={delay(160 + index * 60)}
            >
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl border-l-2 border-gold pl-4 text-sm italic leading-relaxed text-fg/80">
          Leadership is rarely a solo effort. Meaningful outcomes depend on teamwork,
          preparation, and a willingness to take responsibility.
        </p>
      </div>
    </Section>
  );
}
