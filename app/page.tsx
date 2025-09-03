import Image from "next/image";

function LogoMark() {
  return (
    <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent" />
      <span className="relative h-3 w-3 rounded-full bg-white/80" />
    </div>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3l7 3v6c0 4.971-3.214 8.548-7 9-3.786-.452-7-4.029-7-9V6l7-3z"
        className="fill-white/10 stroke-white/30"
        strokeWidth="1.2"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" className="text-white/60" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#0b0c10] text-white/90">
      {/* Vignette + ambient glows */}
      <div className="pointer-events-none absolute inset-0 vignette" />
      {/* Corner ambient lights: lighter, larger, more visible */}
      <div className="pointer-events-none absolute left-[-12%] top-[-12%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(207,253,241,0.32),transparent_60%)] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-12%] top-[-10%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,236,255,0.28),transparent_60%)] blur-[120px]" />
      <div className="pointer-events-none absolute left-[-18%] bottom-[-16%] h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(206,254,218,0.24),transparent_60%)] blur-[110px]" />
      <div className="pointer-events-none absolute right-[-14%] bottom-[-14%] h-[52vh] w-[52vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(240,247,255,0.22),transparent_60%)] blur-[110px]" />

      {/* Main container (full-width) */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-8">
        {/* Nav */}
        <nav className="relative z-10 mx-auto w-[80%] flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="hidden sm:block text-sm/6 text-white/70">Cortex</span>
          </div>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {["Home", "DeFi App", "Assets", "Features", "Pricing", "FAQ"].map((item) => (
              <li key={item}>
                <a className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors" href="#">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 hover:bg-white/15 transition-colors" href="#">
                <span>Protection</span>
                <ShieldIcon className="h-4 w-4 text-white/70 group-hover:text-white" />
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-sm text-white/80 ring-1 ring-white/15 hover:bg-white/10">Sign in</button>
            <button className="inline-flex h-9 items-center rounded-full bg-white text-black px-4 text-sm font-medium hover:bg-white/90">Create Account</button>
          </div>
        </nav>

        {/* Hero Card */}
        <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hero-surface min-h-[90vh] flex items-center">
          {/* star field */}
          <div className="absolute inset-0 grid-dots opacity-[0.35]" />
          {/* vertical light lines */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
            <div className="absolute left-[45%] top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
            <div className="absolute left-[55%] top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
          </div>

          {/* soft spotlight */}
          <div className="pointer-events-none absolute -right-20 top-10 h-[80%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 h-[60%] w-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(207,253,241,0.18),transparent_60%)] blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-8 text-center md:py-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/15">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/20">▶</span>
              Unlock Your Assets Spark!
            </div>

            <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.02em]">
              <span className="text-white">One-click for</span>
              <br />
              <span className="text-white/80">Asset Defense</span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-sm sm:text-base text-white/70">
              Dive into the art assets, where innovative blockchain technology meets financial expertise.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90">
                Open App
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/15">
                Discover More
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8 opacity-70">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="text-xs tracking-wide text-white/60">● ● ●</span>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="pointer-events-none absolute bottom-4 left-4 hidden sm:flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/15">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/20">↓</span>
            02/03 · Scroll down
          </div>
        </section>

        {/* Logos row */}
        <div className="mx-auto w-[80%] mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-xs text-white/60 backdrop-blur-xl sm:grid-cols-4 md:grid-cols-7">
          {["Vercel", "loom", "Cash App", "Loops", "zapier", "ramp", "Raycast"].map((name) => (
            <div key={name} className="py-1 opacity-70 hover:opacity-100 transition-opacity">{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
