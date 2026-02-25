import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Shield, Award, Zap } from "lucide-react";
import ValveScene from "./ValveScene";
import heroValve from "@/assets/hero-valve.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40 z-0" />

      {/* Hero image - subtle background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroValve}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
      </div>

      {/* 3D Background */}
      <Suspense fallback={null}>
        <ValveScene />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-10" />

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-6 md:left-12 w-20 h-20 border-l-2 border-t-2 border-primary/20 z-20" />
      <div className="absolute bottom-20 right-6 md:right-12 w-20 h-20 border-r-2 border-b-2 border-primary/20 z-20" />

      {/* Content */}
      <div className="relative z-20 section-padding w-full max-w-7xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.3em] border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5">
              Est. 1996
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block"
            >
              Industrial
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="block text-gradient"
            >
              Hardware
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="block text-steel text-4xl md:text-5xl lg:text-6xl"
            >
              & Fluid Control
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-muted-foreground text-lg max-w-md mb-10 leading-relaxed"
          >
            Trusted dealer of ball valves, MS/GI pipes, flanges & industrial fittings
            — powering Ankleshwar GIDC for nearly three decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#products"
              className="group relative bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-display font-semibold text-lg glow-primary transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <Zap size={18} className="group-hover:rotate-12 transition-transform" />
              </span>
            </a>
            <a
              href="#about"
              className="border border-border text-foreground px-8 py-3.5 rounded-lg font-display font-semibold text-lg hover:bg-secondary hover:border-primary/20 transition-all"
            >
              Learn More
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, text: "ISO-9001 Certified" },
              { icon: Award, text: "Jindal Top Performer" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2.5 text-muted-foreground text-sm glass-strong rounded-full px-4 py-2"
              >
                <badge.icon size={15} className="text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right side decorative vertical text */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4">
        <div className="h-16 w-px bg-gradient-to-b from-transparent to-primary/40" />
        <span className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-lr]">
          Scroll to explore
        </span>
        <div className="h-16 w-px bg-gradient-to-b from-primary/40 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
