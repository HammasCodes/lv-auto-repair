export default function Hero() {
  return (
    <section
      id="top"
      className="stripe-diagonal relative flex min-h-[100svh] items-center overflow-hidden bg-navy pt-24 text-white"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(214,40,40,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-sm border border-red/50 bg-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red">
            Waco, Texas &middot; 30 Years Strong
          </p>

          <h1 className="text-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            Honest Repair.
            <br />
            <span className="text-red">Real</span> Reliability.
          </h1>

          <p className="mt-7 max-w-xl text-lg text-white/75 sm:text-xl">
            For 30 years, L &amp; V Auto Repair has kept Waco families and
            their vehicles running &mdash; with honest diagnoses, fair
            prices, and repairs you can trust. Family-owned. Always
            straight with you.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-red px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-red-deep"
            >
              Get a Free Estimate
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="tel:+12542353885"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-8 py-4 text-base font-semibold uppercase tracking-wider text-white transition hover:border-white/60 hover:bg-white/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
              </svg>
              Call 254-235-3885
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="text-display text-3xl font-bold text-red">30</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Years in Waco
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl font-bold text-red">Free</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Estimates
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl font-bold text-red">100%</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Family-Owned
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-in relative hidden aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-sm border border-white/15 bg-steel shadow-2xl lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(214,40,40,0.25),rgba(11,31,58,0.95))]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="text-display text-2xl font-bold uppercase leading-tight text-white">
              Warrantied Work.
              <br />
              Same-Day Service.
              <br />
              <span className="text-red">Every Time.</span>
            </p>
          </div>
          <div className="absolute right-6 top-6 h-16 w-16 rounded-full border-2 border-red/60" />
          <div className="absolute right-10 top-10 h-8 w-8 rounded-full bg-red" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep to-transparent" />
    </section>
  );
}
