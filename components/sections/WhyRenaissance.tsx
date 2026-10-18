import { delay, Section, SectionHead } from "@/components/Section";

export default function WhyRenaissance() {
  return (
    <Section id="why">
      <SectionHead
        label="Why Renaissance?"
        title="Not Just a Name. A Renewed Commitment."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-fg/90 sm:text-[1.06rem]">
          <p className="reveal">
            A renaissance is a rebirth: a renewal of ideas, a rediscovery of possibilities,
            and an opportunity to do things better.
          </p>
          <p className="reveal" style={delay(80)}>
            For FASSA, Renaissance represents the belief that student leadership can
            continually improve through purposeful service, inclusive participation, and
            accountable action.
          </p>
          <p className="reveal" style={delay(140)}>
            It is not a claim that everything done before was wrong. Rather, it is a
            commitment to strengthen what works, confront what needs improvement, and
            approach familiar responsibilities with renewed purpose.
          </p>
          <p className="reveal" style={delay(200)}>
            We envision a faculty where students are not merely recipients of decisions,
            but active participants in shaping their experience; where welfare is a
            priority, infrastructure receives sustained attention, and empowerment extends
            beyond the classroom.
          </p>
          <p className="reveal" style={delay(260)}>
            Renaissance is not change for its own sake. It is progress with purpose.
          </p>
        </div>

        <div className="reveal self-center" style={delay(160)}>
          <div className="card grain relative overflow-hidden p-8 sm:p-10">
            <p className="script text-6xl leading-none text-gold-deep sm:text-7xl">
              Renaissance
            </p>
            <p className="font-display mt-6 text-2xl leading-snug sm:text-3xl">
              This is Renaissance.
              <span className="block text-gold-deep">This is Science of Service.</span>
            </p>
            <p className="mt-6 border-t border-line pt-5 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-muted">
              Progress with purpose · FASSA
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
