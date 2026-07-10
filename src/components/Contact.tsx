const PHONE_DISPLAY = "254-235-3885";
const PHONE_TEL = "tel:+12542353885";
const ADDRESS = "1000 N Loop Dr, Waco, TX 76704";

export default function Contact() {
  return (
    <section
      id="contact"
      className="stripe-diagonal relative overflow-hidden bg-navy py-24 text-white sm:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,40,40,0.18),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red">
          Ready When You Are
        </p>
        <h2 className="text-display mt-3 text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
          Get Your Free Estimate
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Call now and talk to a real person about what&apos;s going on
          with your vehicle &mdash; honest answers, fair pricing, no
          surprises.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={PHONE_TEL}
            className="group inline-flex items-center justify-center gap-3 rounded-sm bg-red px-10 py-5 text-xl font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-red-deep"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <p className="text-sm uppercase tracking-wider text-white/50">
            Tap to call &middot; Mon&ndash;Fri 8AM&ndash;6PM &middot; Sat 8AM&ndash;2PM
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 border-t border-white/15 pt-10 text-left sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Visit
            </h3>
            <p className="mt-2 text-white/85">{ADDRESS}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Call
            </h3>
            <a
              href={PHONE_TEL}
              className="mt-2 block font-semibold text-white/85 hover:text-red"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
