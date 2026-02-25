import { motion } from "framer-motion";

const marqueeItems = [
  "Ball Valves",
  "★",
  "MS Pipes",
  "★",
  "GI Pipes",
  "★",
  "Flanges",
  "★",
  "Elbows",
  "★",
  "Nut Bolts",
  "★",
  "Clamps",
  "★",
  "ERW Pipes",
  "★",
  "Seamless Pipes",
  "★",
  "Pipe Fittings",
  "★",
];

export default function MarqueeBanner() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-border/50 bg-secondary/30 py-5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className={`mx-6 font-display text-lg font-semibold ${
              item === "★"
                ? "text-primary text-sm"
                : "text-muted-foreground/70"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
