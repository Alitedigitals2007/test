import { Section, SectionHead } from "@/components/Section";

const PILLARS = [
  {
    index: "Pillar One",
    name: "Welfare",
    title: "Every student matters.",
    intro:
      "The first responsibility of student representation is the wellbeing and legitimate concerns of the people it serves. Every FASSAite deserves dignity, a place to take a concern, and a fair chance to be heard.",
    items: [
      ["Accessible communication", "Make important faculty information easier to find, understand, and access."],
      ["Responsive representation", "Create clear channels for raising concerns and tracking follow-up."],
      ["Inclusive engagement", "Ensure feedback is not limited to the most visible or connected students."],
      ["Practical support", "Help students identify relevant academic, faculty, and university support."],
    ],
    principle: "Welfare should be reflected in everyday decisions, not only in occasional gestures.",
  },
  {
    index: "Pillar Two",
    name: "Infrastructure",
    title: "Better spaces. Better learning.",
    intro:
      "Labs, lecture rooms, and practical facilities shape the student experience. These challenges require documentation, prioritisation, engagement with the right authorities, and honest updates — not complaints or campaign promises.",
    items: [
      ["Identify and document", "Create a structured way to report facility concerns."],
      ["Prioritise needs", "Separate urgent safety concerns from maintenance and long-term improvements."],
      ["Engage stakeholders", "Work with the faculty and university authorities responsible for facilities."],
      ["Communicate progress", "Keep students informed about issues raised, responses, and next steps."],
    ],
    principle: "Where a problem cannot be solved immediately, students should still understand what is being done about it.",
  },
  {
    index: "Pillar Three",
    name: "Empowerment",
    title: "Beyond the classroom.",
    intro:
      "A faculty experience should prepare students not only for examinations, but for what follows university: practical knowledge, access to opportunity, and science applied to real problems.",
    items: [
      ["Opportunity awareness", "Surface scholarships, internships, competitions, and training programmes."],
      ["Skills and careers", "Advocate for useful workshops, peer learning, and professional collaborations."],
      ["Student-led initiatives", "Help students with ideas and projects find collaborators and support."],
      ["Science with impact", "Create room for conversations on innovation, sustainability, and entrepreneurship."],
    ],
    principle: "Empowerment is not just giving students opportunities; it is helping them discover, access, and use them.",
  },
];

const PRINCIPLES = [
  {
    title: "Inclusivity",
    body: "Every student deserves a meaningful chance to contribute — regardless of department, level, background, or connections.",
  },
  {
    title: "Open governance",
    body: "Students should clearly understand what their representatives are responsible for, what work is underway, and how commitments progress.",
  },
  {
    title: "Accountability",
    body: "Communicate what has been done, what remains outstanding, and what stands in the way — honestly.",
  },
];

export default function Vision() {
  return (
    <Section id="vision" tone="alt">
      <SectionHead
        number="03"
        label="The Renaissance Vision"
        title="The faculty we can build, together."
        intro={
          <>
            A renaissance is a renewal of ideas — a commitment to strengthen what works,
            confront what needs improvement, and pursue progress with purpose. My vision
            rests on three pillars, guided by inclusivity, accountability, and open
            governance:{" "}
            <strong className="font-semibold text-fg">
              Welfare, Infrastructure, and Empowerment
            </strong>
            .
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-3 lg:gap-10" data-stagger="130">
        {PILLARS.map((pillar) => (
          <article key={pillar.name} className="reveal" data-layer="mid">
            <div className="pillar">
              <p className="eyebrow text-gold-deep">{pillar.index}</p>
              <h3 className="font-display mt-3 text-4xl">{pillar.name}</h3>
              <p className="font-display mt-2 text-xl italic">{pillar.title}</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">{pillar.intro}</p>
            <p className="eyebrow mt-8 mb-4">What this pillar represents</p>
            <ul className="tick-list space-y-4">
              {pillar.items.map(([name, description]) => (
                <li key={name}>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-gold pl-4 text-sm italic leading-relaxed text-fg">
              <span className="eyebrow mr-2 not-italic">The principle</span>
              {pillar.principle}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-12">
        <p className="reveal eyebrow mb-8">The principles that connect the pillars</p>
        <div className="grid gap-8 sm:grid-cols-3" data-stagger="110">
          {PRINCIPLES.map((principle) => (
            <article key={principle.title} className="reveal pillar" data-layer="near">
              <h3 className="font-display text-2xl">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
