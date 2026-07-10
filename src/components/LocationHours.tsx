const ADDRESS = "1000 N Loop Dr, Waco, TX 76704";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const HOURS = [
  { day: "Monday", time: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
  { day: "Thursday", time: "8:00 AM – 6:00 PM" },
  { day: "Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function LocationHours() {
  return (
    <section id="location" className="relative bg-fog py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red">
            Find Us
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold uppercase leading-tight text-navy sm:text-5xl">
            Location &amp; Hours
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-sm border border-navy/10 shadow-sm">
            <iframe
              title="L & V Auto Repair location map"
              src={MAPS_EMBED_SRC}
              className="h-80 w-full lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-sm border border-navy/10 bg-white p-8 shadow-sm sm:p-10">
            <div>
              <h3 className="text-display text-xl font-bold uppercase tracking-tight text-red">
                Address
              </h3>
              <p className="mt-3 text-lg text-navy/85">{ADDRESS}</p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-slate hover:text-red"
              >
                Get Directions &rarr;
              </a>
            </div>

            <div>
              <h3 className="text-display text-xl font-bold uppercase tracking-tight text-red">
                Hours
              </h3>
              <ul className="mt-3 divide-y divide-navy/10">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2.5 text-navy/80"
                  >
                    <span className="font-semibold">{h.day}</span>
                    <span
                      className={h.time === "Closed" ? "text-navy/35" : "text-navy/90"}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:+12542353885"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-red px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-deep"
            >
              Call for a Free Estimate: 254-235-3885
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
