import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, ShieldCheck, Clock, Wrench, HeartHandshake, Package } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "ISO-9001, ASCB(E) & Nimbus approved products from trusted brands.",
  },
  {
    icon: Truck,
    title: "Rapid Delivery",
    description: "Local stocking ensures fast turnaround — minimizing operational downtime.",
  },
  {
    icon: Package,
    title: "Vast Inventory",
    description: "8,000 sq. ft. warehouse stocked with pipes, valves, fittings & more.",
  },
  {
    icon: Wrench,
    title: "Expert Support",
    description: "Dedicated team providing technical guidance and after-sales service.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    description: "29+ years serving India's top chemical & pharmaceutical companies.",
  },
  {
    icon: Clock,
    title: "End-to-End Solutions",
    description: "From procurement to delivery — everything under one roof.",
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">
              Why Choose Us
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Built on <span className="text-gradient">Reliability</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            What sets Standard Hardware apart in India's competitive industrial landscape.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-7 group hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/0 group-hover:via-primary group-hover:to-primary/0 transition-all duration-700" />

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
