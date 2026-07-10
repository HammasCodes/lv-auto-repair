const PHONE_DISPLAY = "254-235-3885";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="text-display text-base font-bold uppercase tracking-wide">
          L <span className="text-red">&amp;</span> V Auto Repair
        </p>
        <p className="text-sm text-white/50">
          1000 N Loop Dr, Waco, TX 76704 &middot;{" "}
          <a href="tel:+12542353885" className="hover:text-red">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-xs text-white/35">
          {`© ${new Date().getFullYear()} L & V Auto Repair. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
