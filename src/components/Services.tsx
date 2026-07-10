const SERVICES = [
  { title: "Transmissions", description: "Repair and rebuild service to keep you shifting smoothly." },
  { title: "Suspension Work", description: "Struts, shocks, and alignment for a smooth, safe ride." },
  { title: "A/C Repair", description: "Get your cool back before the Texas heat hits full force." },
  { title: "Brakes", description: "Pads, rotors, and full brake service — safety first." },
  { title: "Oil Changes", description: "Fast, thorough oil changes to keep your engine protected." },
  { title: "Tune-Ups", description: "Keep your vehicle running at its best, mile after mile." },
  { title: "Starter Repairs", description: "Won't start? We diagnose and fix starting issues fast." },
  { title: "General Auto Repair", description: "From the small stuff to the big jobs, we handle it all." },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-fog py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red">
            What We Fix
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold uppercase leading-tight text-navy sm:text-5xl">
            Full-Service Auto Repair
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-sm border border-navy/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-lg"
            >
              <span className="h-1 w-10 bg-red" />
              <h3 className="text-display mt-4 text-xl font-bold uppercase tracking-tight text-navy">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
