import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "02646-223891",
    href: "tel:02646223891",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Plot No. 2601/5/6/7, Asian Paints Chowkdi, GIDC, Ankleshwar 393002",
  },
  {
    icon: Mail,
    label: "Website",
    value: "www.standardhardware.com",
    href: "https://www.standardhardware.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative noise-overlay" ref={ref}>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mb-12">
            Reach out for product inquiries, quotations, or technical support — we respond within 24 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-strong rounded-2xl p-7 flex items-start gap-5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary/0 group-hover:via-primary/40 to-primary/0 transition-all duration-700" />

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                  <info.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-1.5">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors leading-relaxed"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm leading-relaxed">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
