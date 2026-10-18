import { delay, Section, SectionHead } from "@/components/Section";

const PILLARS = [
  {
    index: "Pillar One",
    name: "Welfare",
    title: "Every Student Matters.",
    intro: [
      "The primary responsibility of student representation is to pay attention to the wellbeing and legitimate concerns of the people being represented.",
      "I believe welfare must extend across departments, levels, backgrounds, and circumstances. Every FASSAite deserves to be treated with dignity, to know where to take a concern, and to have a fair opportunity to be heard.",
    ],
    items: [
      ["Accessible Communication", "Make important faculty information easier to find, understand, and access."],
      ["Responsive Representation", "Create clear channels for raising concerns and tracking appropriate follow-up."],
      ["Inclusive Engagement", "Ensure that feedback is not limited to the most visible or connected students."],
      ["Practical Support", "Help students identify relevant academic, faculty, and university support resources."],
    ],
    principle: "Welfare should be reflected in everyday decisions, not only in occasional gestures.",
  },
  {
    index: "Pillar Two",
    name: "Infrastructure",
    title: "Better Spaces. Better Learning.",
    intro: [
      "The environment in which students learn matters. Laboratories, lecture rooms, practical facilities, and other learning spaces affect the student experience.",
      "Renaissance recognises that infrastructure challenges require more than complaints or campaign promises. They require documentation, prioritisation, constructive engagement with the relevant authorities, and honest updates.",
    ],
    items: [
      ["Identify and Document", "Create a structured way to report facility concerns."],
      ["Prioritise Needs", "Distinguish urgent safety concerns from maintenance and longer-term improvement requests."],
      ["Engage the Right Stakeholders", "Work with the relevant faculty and university authorities responsible for facilities and resources."],
      ["Communicate Progress", "Keep students informed about issues raised, responses received, and next steps."],
    ],
    principle: "Where a problem cannot be solved immediately, students should still be able to understand what is being done about it.",
  },
  {
    index: "Pillar Three",
    name: "Empowerment",
    title: "Beyond the Classroom.",
    intro: [
      "A faculty experience should help students prepare not only for examinations, but also for the opportunities and challenges that follow university.",
      "My interests in data analysis, marketing, and climate change reinforce my belief in the value of practical knowledge, access to opportunities, and the application of science to real-world problems.",
    ],
    items: [
      ["Opportunity Awareness", "Make relevant scholarships, internships, competitions, training programmes, and professional opportunities easier to discover."],
      ["Skills and Career Development", "Advocate for useful workshops, peer learning, and collaborations with relevant professionals and organisations."],
      ["Student-Led Initiatives", "Encourage students with ideas and projects to find collaborators and explore appropriate support."],
      ["Science with Wider Impact", "Create room for conversations about innovation, sustainability, entrepreneurship, and the application of scientific knowledge."],
    ],
    principle: "Empowerment is not simply giving students opportunities; it is helping them discover, access, and make use of them.",
  },
];

const PRINCIPLES = [
  {
    title: "Inclusivity: A Faculty for Everyone",
    body: "Every student should have a meaningful opportunity to contribute, irrespective of department, level, background, religion, ethnicity, or personal connections. Inclusivity means creating opportunities for students to be heard and ensuring that representation is not reserved for a select few.",
  },
  {
    title: "Open Governance: Let Students See the Work",
    body: "FASSAites should have a clearer understanding of the responsibilities of their elected representatives, the work being undertaken, and the progress of important commitments. Student representation should be understandable to the students it serves.",
  },
  {
    title: "Accountability: Make Service Visible",
    body: "Communicate what has been done, what remains outstanding, and what obstacles exist. Publish appropriate progress updates and reports while respecting privacy, confidentiality, and institutional rules. Accountability requires honesty about achievements as well as limitations.",
  },
];

export default function Vision() {
  return (
    <Section id="vision" tone="alt">
      <SectionHead
        number="04"
        label="What Ajoje the Renaissance Represents"
        title="The Faculty We Can Build, Together."
        intro={
          <>
            I believe a better faculty begins with understanding the people who make it
            what it is. Every department, every level, and every student contributes to the
            identity of FASSA. My vision for Renaissance rests on three interconnected
            pillars: <strong className="font-semibold text-fg">Welfare, Infrastructure, and Empowerment</strong>.
            These pillars are guided by a commitment to inclusivity, accountability, and
            open governance.
          </>
        }
      />

      <p className="reveal mb-14 max-w-3xl text-sm leading-relaxed text-muted">
        The goal is not to make promises beyond the reach of the office, but to identify
        real needs, pursue practical solutions with the appropriate stakeholders, and keep
        students informed about progress.
      </p>

      <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        {PILLARS.map((pillar, index) => (
          <article key={pillar.name} className="reveal" style={delay(index * 120)}>
            <div className="pillar">
              <p className="eyebrow text-gold-deep">{pillar.index}</p>
              <h3 className="font-display mt-3 text-4xl">{pillar.name}</h3>
              <p className="font-display mt-2 text-xl italic">{pillar.title}</p>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              {pillar.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
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

      <div className="mt-20 border-t border-line pt-14">
        <p className="reveal eyebrow mb-8">The principles that connect the three pillars</p>
        <div className="grid gap-10 sm:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <article key={principle.title} className="reveal pillar" style={delay(index * 100)}>
              <h3 className="font-display text-2xl">{principle.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
