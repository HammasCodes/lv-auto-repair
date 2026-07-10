const PILLARS = [
  {
    title: "Family-Owned & Operated",
    description:
      "L & V Auto Repair is run by a Waco family, for Waco families. When you bring us your car, you're treated like one of our own.",
  },
  {
    title: "30 Years Serving Waco",
    description:
      "Three decades of honest repairs and straight talk have made us a trusted name across the community.",
  },
  {
    title: "Same-Day Service Available",
    description:
      "Most jobs can be turned around the same day, so you're back on the road without missing a beat.",
  },
  {
    title: "Warrantied Work",
    description:
      "Every repair is backed by our warranty, because we stand behind the work we do.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red">
            About L &amp; V Auto Repair
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold uppercase leading-tight text-navy sm:text-5xl">
            30 Years of Honest
            <br />
            <span className="text-red">Work.</span>
          </h2>
          <p className="mt-6 text-lg text-slate">
            For 30 years, L &amp; V Auto Repair has been a family-owned
            fixture in Waco &mdash; the kind of shop where you know the
            people working on your car, and they know you.
          </p>
          <p className="mt-4 text-lg text-slate">
            We believe in honest diagnoses, fair pricing, and repairs done
            right the first time. Most jobs can be completed same-day, and
            every repair is backed by our warranty &mdash; because your
            trust means everything to us.
          </p>
        </div>

        <div className="grid gap-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-5 rounded-sm border border-navy/10 bg-fog p-6"
            >
              <span className="mt-1 h-full w-1 shrink-0 self-stretch bg-red" />
              <div>
                <h3 className="text-display text-xl font-bold uppercase tracking-tight text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-slate">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
