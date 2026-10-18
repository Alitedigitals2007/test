import { delay, Section } from "@/components/Section";

export default function Leadership() {
  return (
    <Section id="leadership" tone="brand" className="grain overflow-hidden">
      <div className="reveal max-w-3xl">
        <p className="eyebrow flex items-center gap-3 text-brand-fg/70">
          <span className="text-gold">03</span>
          <span className="h-px w-10 bg-brand-fg/30" aria-hidden="true" />
          Leadership Begins With Service
        </p>
        <blockquote className="mt-8">
          <p className="font-display text-3xl leading-snug sm:text-4xl">
            &ldquo;Everybody can be great, because everybody can serve.&rdquo;
          </p>
          <footer className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-gold">
            Martin Luther King Jr.
          </footer>
        </blockquote>
        <p className="mt-8 text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          I believe that <strong className="font-semibold text-brand-fg">the number one priority of every student leader is the welfare of the people they serve</strong>.
          Leadership must begin with the people, remain accountable to them, and be
          measured by the effort made to improve their experience.
        </p>
        <p className="mt-5 text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          To me, service is not simply holding a position or occupying a seat at the table.
          It is listening to concerns, accepting responsibility, working towards practical
          solutions, and recognising that even the smallest duty deserves to be done
          excellently.
        </p>
      </div>

      <div className="reveal mt-14 max-w-3xl" style={delay(120)}>
        <p className="text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          Nelson Mandela captured this spirit when he declared:
        </p>
        <blockquote className="mt-6 border-l-2 border-gold pl-6">
          <p className="font-display text-2xl italic leading-snug sm:text-3xl">
            &ldquo;I stand here before you not as a prophet but as a humble servant of you,
            the people.&rdquo;
          </p>
          <footer className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-gold">
            Nelson Mandela · Address following his release from prison, 11 February 1990
          </footer>
        </blockquote>
        <p className="mt-8 text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          These words reflect the kind of leadership I believe in: one grounded in humility,
          shaped by responsibility, and centred on the people it exists to serve.
        </p>
        <p className="mt-5 text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          My experiences in departmental administration, student committees, hall
          leadership, and the FASSA Freshers&rsquo; Help Desk have reinforced my
          understanding that meaningful service requires listening, collaboration, and
          accountability.
        </p>
        <p className="mt-5 text-base leading-relaxed text-brand-fg/85 sm:text-lg">
          This is the philosophy behind{" "}
          <strong className="font-semibold text-brand-fg">RENAISSANCE — Science of Service</strong>:
          a commitment to putting student welfare first, strengthening inclusivity,
          pursuing practical improvements, and making the work of student representation
          more open and accountable.
        </p>
        <p className="mt-10 font-display text-2xl leading-snug sm:text-3xl">
          Because leadership is not about being above the people.{" "}
          <span className="text-gold">It is about being responsible to them.</span>
        </p>
      </div>
    </Section>
  );
}
