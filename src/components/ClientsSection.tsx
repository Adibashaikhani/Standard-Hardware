import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory } from "lucide-react";

const clients = [
  "Jubilant Infrastructure",
  "Deccan Fine Chemicals",
  "Grasim Industries",
  "Gharda Chemicals",
  "Deepak Nitrite",
  "Meghmani Group",
  "Lupin Limited",
  "Asian Paints Ltd.",
  "Tatva-Chintan Pharma",
  "Subhalaxmi Polyester",
  "Bharat Rasayan",
  "Chemi Organics Pvt. Ltd.",
];

export default function ClientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">
                Our Clients
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Serving India's premier chemical, pharmaceutical, and manufacturing companies for nearly three decades.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-strong rounded-xl p-5 text-center hover:border-primary/20 transition-all duration-500 group cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary to-transparent transition-all duration-700" />
                <Factory size={18} className="text-primary/30 group-hover:text-primary/60 mx-auto mb-2 transition-colors duration-300" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
