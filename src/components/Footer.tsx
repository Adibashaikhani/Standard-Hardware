import { Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/50 section-padding py-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">SH</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider text-foreground">STANDARD</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">Hardware</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            {["Home", "About", "Products", "Clients", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
          >
            <ArrowUp size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Standard Hardware. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            GIDC, Ankleshwar 393002 · Gujarat, India
          </p>
          <a
            href="tel:02646223891"
            className="flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <Phone size={14} />
            02646-223891
          </a>
        </div>
      </div>
    </footer>
  );
}
