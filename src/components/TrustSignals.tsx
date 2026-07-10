const SIGNALS = [
  { title: "Free Estimates", description: "Know the cost before we start, always." },
  { title: "Warrantied Repairs", description: "Every job backed by our warranty." },
  { title: "30 Years Experience", description: "Three decades trusted by Waco." },
  { title: "Family-Owned", description: "Local, family-run, and proud of it." },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function TrustSignals() {
  return (
    <section className="relative bg-navy py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNALS.map((signal) => (
            <div key={signal.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red/15 text-red">
                <CheckIcon />
              </span>
              <div>
                <h3 className="text-display text-lg font-bold uppercase tracking-tight text-white">
                  {signal.title}
                </h3>
                <p className="mt-1 text-sm text-white/60">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
