import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-card" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brass/10 rounded-full blur-[60px]" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
                Ready to <span className="text-gradient">Streamline</span> Your Supply?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Get in touch for reliable industrial hardware sourcing with competitive pricing and rapid delivery across Gujarat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:02646223891"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-semibold text-lg glow-primary hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl font-display font-semibold text-lg hover:bg-secondary transition-colors"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
