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

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white/90">
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

          <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/10">
            Explore VeChain
            <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-white" />
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
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-black hover:bg-white">
                Explore VeChain
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* logo strip moved to footer below */}
          </motion.div>
        </section>

        <motion.footer
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-8 flex w-full flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-xl"
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
