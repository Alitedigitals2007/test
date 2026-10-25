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
        title="The journey. The philosophy. The Renaissance."
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
            known as <strong className="font-semibold">AJOJE</strong> — a 300-level Physics
            student at the University of Ibadan and a proud member of the Faculty of
            Science.
          </p>
          <p className="reveal" style={delay(80)}>
            My journey through departmental responsibilities, student committees, hall
            administration, and student-support initiatives has shaped one conviction:
            leadership is not a position to occupy. It is an opportunity to serve,
            identify challenges, pursue practical solutions, and make students&rsquo;
            experiences count.
          </p>
          <p className="reveal" style={delay(160)}>
            For me, the number one priority of every student leader is the{" "}
            <strong className="font-semibold">
              welfare of the people they are serving
            </strong>
            . That conviction is the heart of{" "}
            <strong className="font-semibold">Renaissance — Science of Service</strong>: a
            commitment to a FASSA where welfare receives deliberate attention,
            infrastructure is taken seriously, empowerment creates opportunities, and
            every student has a meaningful voice.
          </p>
        </div>

        <aside className="reveal space-y-8" style={delay(160)} data-layer="mid">
          <div data-parallax="0.06">
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
