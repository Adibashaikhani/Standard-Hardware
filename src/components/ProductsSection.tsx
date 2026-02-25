import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import productsValves from "@/assets/products-valves.jpg";
import productsPipes from "@/assets/products-pipes.jpg";
import productsFittings from "@/assets/products-fittings.jpg";

const products = [
  {
    title: "Ball Valves",
    subtitle: "ACCURA Brand",
    description:
      "ISO-9001 certified, ASCB(E) and Nimbus approved ball valves for commercial and industrial applications.",
    image: productsValves,
    tags: ["ISO-9001", "ACCURA Brand", "Industrial Grade"],
    number: "01",
  },
  {
    title: "MS & GI Pipes",
    subtitle: "JINDAL Star",
    description:
      "Authorized Distributor of JINDAL 'Star' MS Round Pipes — ERW and Seamless variants for all industrial needs.",
    image: productsPipes,
    tags: ["JINDAL Star", "ERW", "Seamless"],
    number: "02",
  },
  {
    title: "Fittings & Hardware",
    subtitle: "Precision Engineered",
    description:
      "Complete range of flanges, elbows, nut bolts, clamps, and MS/GI pipe fittings manufactured with precision.",
    image: productsFittings,
    tags: ["Flanges", "Nut Bolts", "Clamps"],
    number: "03",
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative noise-overlay" ref={ref}>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">
                Our Products
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.95]">
              Industrial
              <br />
              <span className="text-gradient">Product Range</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed md:pb-2">
            From ball valves to steel pipes and precision fittings — we provide end-to-end
            industrial hardware solutions built for reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group glass-strong rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-700 relative"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 z-20 text-5xl font-display font-bold text-foreground/5 group-hover:text-primary/10 transition-colors duration-500">
                {product.number}
              </div>

              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

                {/* Title overlay on image */}
                <div className="absolute bottom-4 left-5 z-10">
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                    {product.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {product.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
