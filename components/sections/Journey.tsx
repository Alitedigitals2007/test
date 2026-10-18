import { delay, Section, SectionHead } from "@/components/Section";

const TIMELINE = [
  { year: "2022", role: "Participant, Queen's Commonwealth Essay Competition (QCEC)." },
  { year: "2024", role: "Participant, Climate Science Olympiad." },
  { year: "2024–2025", role: "Assistant General Secretary, NAPS." },
  { year: "2024–2025", role: "Vice-Chairperson, FASSA Freshers' Help Desk Committee." },
  { year: "2024–2025", role: "Member, NAPS Week." },
  { year: "2024–2025", role: "Member, CBN LT Maintenance Committee." },
  { year: "2025–2026", role: "General Secretary, Israel Oludotun Ransome-Kuti Hall." },
  { year: "2025–2026", role: "Co-Chairperson, FASSA Freshers' Help Desk Committee." },
  { year: "2026", role: "Co-Head, Personality Lecture, Kuti Hall Week." },
];

const UNDATED = [
  "Member, Kuti @ 70 Publicity Team.",
  "Member, University of Ibadan Students' Union Freshers' Help Desk Committee.",
  "Member, Faculty Lecture Theatre (FLT) TDB Committee.",
  "Member, FASSA Supporters' Committee.",
];

const THEMES = [
  {
    title: "Administration and Responsibility",
    body: [
      "My experience as Assistant General Secretary of NAPS and General Secretary of Ransome-Kuti Hall has exposed me to the importance of documentation, correspondence, coordination, and administrative responsibility.",
      "These experiences have reinforced the value of organised systems, timely communication, and attention to detail in ensuring that responsibilities are handled effectively.",
    ],
  },
  {
    title: "Student Support and Inclusion",
    body: [
      "Through my involvement in the FASSA Freshers' Help Desk and other student-support committees, I have seen the importance of helping students navigate information, processes, and the early stages of faculty life.",
      "These experiences have strengthened my belief that representation must be accessible, responsive, and attentive to the needs of students across different levels and departments.",
    ],
  },
  {
    title: "Collaboration and Community",
    body: [
      "From publicity teams and student activities to committee assignments and lecture planning, my experiences have taught me that meaningful outcomes depend on teamwork, preparation, and a willingness to take responsibility.",
      "Leadership is rarely a solo effort. It requires bringing people together around a shared purpose.",
    ],
  },
  {
    title: "Science, Curiosity, and Wider Impact",
    body: [
      "My participation in the Climate Science Olympiad reflects my interest in science and the application of knowledge to wider societal challenges.",
      "I am also interested in data analysis, marketing, and climate change. These interests reinforce my appreciation for evidence-based thinking, effective communication, and practical approaches to problem-solving.",
    ],
  },
];

export default function Journey() {
  return (
    <Section id="journey">
      <SectionHead
        number="02"
        label="A Journey of Service"
        title="Service is a journey of learning, responsibility, collaboration, and growth."
        intro="The following experiences have contributed to my development and understanding of leadership."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="reveal">
          <p className="eyebrow mb-6">Experience &amp; leadership timeline</p>
          <ol className="relative space-y-6 border-l border-line-strong pl-7">
            {TIMELINE.map((item, index) => (
              <li key={item.role} className="reveal relative" style={delay(index * 50)}>
                <span
                  className="absolute -left-[2.13rem] top-1.5 h-2.5 w-2.5 rounded-full border border-gold-deep bg-gold"
                  aria-hidden="true"
                />
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold-deep">
                  {item.year}
                </p>
                <p className="mt-1 text-[0.98rem] leading-relaxed">{item.role}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-dashed border-line-strong p-5">
            <p className="eyebrow mb-3 text-warn">Dates to confirm</p>
            <ul className="space-y-2.5">
              {UNDATED.map((role) => (
                <li key={role} className="text-sm leading-relaxed text-muted">
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              These roles are shown exactly as held while their dates and official titles
              are being verified before publication.
            </p>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {THEMES.map((theme, index) => (
            <article key={theme.title} className="reveal pillar" style={delay(120 + index * 80)}>
              <h3 className="font-display text-2xl">{theme.title}</h3>
              {theme.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
