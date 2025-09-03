"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function VLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="none" {...props}>
      <path d="M3 6l5.5 12L21 6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Reusable animation props
const floatProps = (
  speed = 9,
  amplitude = 8,
  reverse = false,
  delay = 0
) => ({
  animate: { y: [0, reverse ? amplitude : -amplitude, 0] },
  transition: { duration: speed, repeat: Infinity, easing: "ease-in-out", delay },
})

const shimmerProps = (duration = 7.5, delay = 0) => ({
  animate: { opacity: [0.72, 0.98, 0.72] },
  transition: { duration, repeat: Infinity, easing: "ease-in-out", delay },
})


export default function Home() {
  return (
    <main className="relative min-h-[90vh] w-full text-white/90">
      <div className="absolute inset-0 vignette" />
      <motion.div
        className="pointer-events-none absolute -left-24 top-0 h-[80vh] w-[55vw] aurora-left"
        initial={{ opacity: 0.6, x: -20, y: 10 }}
        animate={{ opacity: 0.9, x: 0, y: 0 }}
        transition={{ duration: 0.9, easing: "ease-out" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-28 top-8 h-[85vh] w-[55vw] aurora-right"
        initial={{ opacity: 0.6, x: 20, y: -10 }}
        animate={{ opacity: 0.9, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, easing: "ease-out" }}
      />

    {/* LEFT AURORA */}
<motion.svg
  aria-hidden
  {...floatProps(9, 8, /*reverse*/ false)}
  style={{
    position: "absolute",
    top: "-160px",
    left: "-340px",
    width: "900px",
    height: "980px",
    filter: "blur(68px)",
    opacity: 0.92,
    pointerEvents: "none",
    zIndex: 0,
  }}
  viewBox="0 0 900 980"
>
  {/* defs ... */}
  <defs>
  <linearGradient id="vc-left-core" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%"  stopColor="#d0a8ff" stopOpacity="0.95" />
    <stop offset="40%" stopColor="#b691ff" stopOpacity="0.85" />
    <stop offset="80%" stopColor="#7c3aed" stopOpacity="0.55" />
    <stop offset="100%" stopColor="#5b21b6" stopOpacity="0" />
  </linearGradient>
  <linearGradient id="vc-left-body" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%"  stopColor="#2a0a67" stopOpacity="0" />
    <stop offset="45%" stopColor="#6d28d9" stopOpacity="0.35" />
    <stop offset="85%" stopColor="#a78bfa" stopOpacity="0.25" />
    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
  </linearGradient>
  <filter id="vc-softGlow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
    <feMerge>
      <feMergeNode in="blur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>

  <path
    d="M-60 120 C 180 260 120 430 310 600 S 260 880 -40 960 L -60 120 Z"
    fill="url(#vc-left-body)" 
  />
  <g filter="url(#vc-softGlow)">
    <motion.path
      d="M10 160 C 210 280 150 430 330 590 S 290 830 50 930"
      stroke="url(#vc-left-core)"
      strokeWidth="118"
      strokeLinecap="round"
      fill="none"
      {...shimmerProps(7.5)}
    />
    <motion.path
      d="M-10 220 C 170 320 150 470 320 620 S 260 820 20 900"
      stroke="url(#vc-left-core)"
      strokeWidth="74"
      strokeLinecap="round"
      fill="none"
      opacity=".65"
      {...shimmerProps(7.5, 0.4)}
    />
  </g>
</motion.svg>

{/* RIGHT AURORA (reverse float) */}
<motion.svg
  aria-hidden
  {...floatProps(10.5, 8, /*reverse*/ true)}
  style={{
    position: "absolute",
    top: "-160px",
    right: "-340px",
    width: "900px",
    height: "980px",
    filter: "blur(70px)",
    opacity: 0.92,
    pointerEvents: "none",
    zIndex: 0,
  }}
  viewBox="0 0 900 980"
>
  {/* defs ... */}

  <defs>
  <linearGradient id="vc-right-core" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0%"  stopColor="#d0a8ff" stopOpacity="0.95" />
    <stop offset="40%" stopColor="#b691ff" stopOpacity="0.85" />
    <stop offset="80%" stopColor="#7c3aed" stopOpacity="0.55" />
    <stop offset="100%" stopColor="#5b21b6" stopOpacity="0" />
  </linearGradient>
  <linearGradient id="vc-right-body" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0%"  stopColor="#2a0a67" stopOpacity="0" />
    <stop offset="45%" stopColor="#6d28d9" stopOpacity="0.35" />
    <stop offset="85%" stopColor="#a78bfa" stopOpacity="0.25" />
    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
  </linearGradient>
  <filter id="vc-softGlow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
    <feMerge>
      <feMergeNode in="blur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>

  <path
    d="M960 120 C 720 260 790 430 600 600 S 640 880 940 960 L 960 120 Z"
    fill="url(#vc-right-body)"
  />
  <g filter="url(#vc-softGlow)">
    <motion.path
      d="M900 160 C 700 280 760 430 580 590 S 630 830 870 930"
      stroke="url(#vc-right-core)"
      strokeWidth="118"
      strokeLinecap="round"
      fill="none"
      {...shimmerProps(7.5)}
    />
    <motion.path
      d="M920 220 C 740 320 760 470 590 620 S 650 820 890 900"
      stroke="url(#vc-right-core)"
      strokeWidth="74"
      strokeLinecap="round"
      fill="none"
      opacity=".65"
      {...shimmerProps(7.5, 0.4)}
    />
  </g>
</motion.svg>

{/* BOTTOM CORE WAVE */}
<motion.svg
  aria-hidden
  {...floatProps(9, 8, false)}
  style={{
    position: "absolute",
    bottom: "-180px",
    left: 0,
    width: "100%",
    height: "480px",
    filter: "blur(68px)",
    opacity: 0.95,
    pointerEvents: "none",
    zIndex: 0,
  }}
  viewBox="0 0 1400 480"
  preserveAspectRatio="none"
>
  {/* defs ... */}

  <defs>
  <linearGradient id="vc-bottom-soft" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%"  stopColor="#2a0a67" stopOpacity="0" />
    <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.35" />
    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.25" />
  </linearGradient>
  <linearGradient id="vc-bottom-core" x1="0" y1="0" x2="1" y2="0">
    <stop offset="15%" stopColor="#e9ddff" stopOpacity="0.98" />
    <stop offset="45%" stopColor="#c4b5fd" stopOpacity="0.92" />
    <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.55" />
  </linearGradient>
</defs>

  <path
    d="M0 260 C 220 120 420 220 700 240 C 980 260 1160 220 1400 200 L 1400 480 L 0 480 Z"
    fill="url(#vc-bottom-soft)"
  />
  <motion.path
    d="M-10 300 C 260 240 470 300 700 270 C 930 240 1140 300 1410 260"
    stroke="url(#vc-bottom-core)"
    strokeWidth="116"
    strokeLinecap="round"
    fill="none"
    {...shimmerProps(7.5)}
  />
  <motion.path
    d="M-10 330 C 280 280 480 340 700 305 C 920 270 1140 330 1410 305"
    stroke="url(#vc-bottom-core)"
    strokeWidth="88"
    strokeLinecap="round"
    fill="none"
    opacity=".7"
    {...shimmerProps(8.2, 0.25)}
  />
  <motion.path
    d="M-10 355 C 300 305 500 360 700 330 C 900 300 1140 350 1410 330"
    stroke="url(#vc-bottom-core)"
    strokeWidth="64"
    strokeLinecap="round"
    fill="none"
    opacity=".55"
    {...shimmerProps(8.8, 0.5)}
  />
</motion.svg>


      <div className="relative mx-auto w-full max-w-7xl px-5 pt-6">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, easing: "ease-out" }}
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
              <VLogo className="h-4 w-4 text-white/80" />
            </span>
            <span className="text-sm text-white/80">VeChain</span>
          </div>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {["Explore","Build","Enterprise","Discover"].map((item)=> (
              <a key={item} href="#" className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <a href="#" className="group inline-flex items-center gap-2 text-sm font-medium btn-gradient btn-lg">
            Explore VeChain
            <ArrowRight className="h-4 w-4 text-white/90 group-hover:text-white" />
          </a>
        </motion.header>

        <section className="relative mt-8">

          <motion.div
            className="relative z-10 mx-auto flex min-h-[72vh] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easing: "ease-out" }}
          >
            <motion.span
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80 ring-1 ring-white/15"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Web3 For Better
            </motion.span>

            <div>
              <motion.h1
                className="text-balance text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-[-0.02em]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="headline-gradient">Real-world adoption</span>
                <br />
                <span className="headline-gradient">blockchain technology</span>
              </motion.h1>
            </div>

            <motion.p
              className="mt-4 max-w-2xl text-pretty text-sm sm:text-base text-white/75"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              The VeChainThor blockchain is the foundation on which the VeChain ecosystem is built.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium btn-gradient btn-lg">
                Explore VeChain
                <ArrowRight className="h-4 w-4 text-white" />
              </a>
            </motion.div>

            {/* logo strip moved to footer below */}
          </motion.div>
        </section>

        <motion.footer
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-12 flex w-full flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">Trusted by forward‑thinking teams</p>
          <div className="grid w-full max-w-5xl grid-cols-3 items-center justify-items-center gap-6 text-white/70 sm:grid-cols-6">
            {[
              { src: "/vercel.svg", alt: "Vercel" },
              { src: "/next.svg", alt: "Next.js" },
              { src: "/globe.svg", alt: "Globe" },
              { src: "/window.svg", alt: "Window" },
              { src: "/file.svg", alt: "File" },
              { src: "/vercel.svg", alt: "Vercel 2" },
            ].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                whileHover={{ opacity: 1, scale: 1.04 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={72}
                  height={22}
                  className="h-6 w-auto opacity-60 contrast-125 invert-[.9] grayscale"
                />
              </motion.div>
            ))}
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

