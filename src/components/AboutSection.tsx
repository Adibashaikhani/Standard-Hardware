import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, Users, Warehouse, MapPin } from "lucide-react";

const stats = [
  { icon: Building2, value: 29, suffix: "+", label: "Years of Trust" },
  { icon: Users, value: 10, suffix: "+", label: "Team Members" },
  { icon: Warehouse, value: 8000, suffix: "", label: "Sq. Ft. Warehouse" },
  { icon: MapPin, value: 12, suffix: "+", label: "Key Clients" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="shimmer-text">
      {target >= 1000 ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative noise-overlay" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-[0.95]">
              Powering India's
              <br />
              <span className="text-gradient">Industrial Growth</span>
            </h2>

            <div className="line-accent pl-6 space-y-5 mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Founded in <span className="text-foreground font-medium">1996</span> in Ankleshwar — one of India's most prominent industrial hubs — Standard Hardware is a trusted dealer specializing in industrial hardware and fluid control solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We deliver reliable procurement, quality products, and comprehensive after-sales support. Our vision: <span className="text-foreground font-medium">end-to-end solutions under one roof.</span>
              </p>
            </div>

            {/* Partners */}
            <div className="flex gap-4">
              <div className="glass-strong rounded-lg px-4 py-3">
                <div className="text-xs text-muted-foreground mb-1">Administration & Sales</div>
                <div className="text-sm font-display font-semibold text-foreground">Mr. Rutubh C. Patel</div>
              </div>
              <div className="glass-strong rounded-lg px-4 py-3">
                <div className="text-xs text-muted-foreground mb-1">Marketing Head</div>
                <div className="text-sm font-display font-semibold text-foreground">Mr. Nirav H. Patel</div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-strong rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-2xl transition-all duration-700" />

                <stat.icon
                  size={28}
                  className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-4xl font-display font-bold text-foreground mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
