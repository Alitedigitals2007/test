import Image from "next/image";
import { delay, Section, SectionHead } from "@/components/Section";

const FACTS = [
  ["Candidate", "Adedeji-Ajoje Daniel (AJOJE)"],
  ["Level", "300-level Physics"],
  ["School", "University of Ibadan"],
  ["Faculty", "Faculty of Science (FASSA)"],
];

export default function Meet() {
  return (
    <Section id="meet" tone="alt">
      <SectionHead
        number="01"
        label="Meet Ajoje"
        title="The Journey. The Philosophy. The Renaissance."
        intro={
          <em className="font-display text-2xl italic tracking-normal">
            A student. A servant. A believer in meaningful progress.
          </em>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-6 text-base leading-relaxed text-fg/90 sm:text-[1.06rem]">
          <p className="reveal">
            I am <strong className="font-semibold">Adedeji-Ajoje Daniel</strong>, popularly
            known as <strong className="font-semibold">AJOJE</strong>, a 300-level Physics
            student at the University of Ibadan and a proud member of the Faculty of Science.
          </p>
          <p className="reveal" style={delay(80)}>
            My journey through departmental responsibilities, student committees, hall
            administration, and student-support initiatives has shaped my understanding of
            leadership. I have come to appreciate the importance of responsibility,
            teamwork, effective communication, and the need to make students&rsquo;
            experiences count.
          </p>
          <p className="reveal" style={delay(140)}>
            These experiences have strengthened my conviction that leadership should be
            more than a position to occupy. It should be an opportunity to serve, identify
            challenges, pursue practical solutions, and create room for every student to
            contribute.
          </p>
          <p className="reveal" style={delay(200)}>
            For me, the number one priority of every student leader is the{" "}
            <strong className="font-semibold">welfare of the people they are serving</strong>.
            Every other responsibility should be approached with this fundamental principle
            in mind.
          </p>
          <p className="reveal" style={delay(260)}>
            This conviction is at the heart of{" "}
            <strong className="font-semibold">RENAISSANCE — Science of Service</strong>.
          </p>
          <p className="reveal" style={delay(320)}>
            Renaissance represents my commitment to a FASSA where student welfare receives
            deliberate attention, infrastructure is taken seriously, empowerment creates
            opportunities, and every student has a meaningful voice.
          </p>
        </div>

        <aside className="reveal space-y-8" style={delay(160)}>
          <div className="arch border border-line-strong bg-bg shadow-[var(--shadow)]">
            <Image
              src="/images/ajoje-portrait.webp"
              alt="Portrait of Adedeji-Ajoje Daniel (Ajoje)"
              width={960}
              height={1200}
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="card p-6">
            <p className="eyebrow mb-4">Quick facts</p>
            <dl className="space-y-3">
              {FACTS.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-none last:pb-0">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {label}
                  </dt>
                  <dd className="text-right text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </Section>
  );
}
