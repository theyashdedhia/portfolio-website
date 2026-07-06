import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Work", id: "work" },
  { label: "Products", id: "products" },
  { label: "Toolchain", id: "toolchain" },
  { label: "Contact", id: "contact" },
];

const RESUME_HREF = `${import.meta.env.BASE_URL}resume.pdf`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-baseline gap-3" aria-label="Back to top">
          <span className="display text-lg font-bold">Yash Dedhia</span>
          <span className="fig-label hidden sm:inline">AI Engineer</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-mono text-xs uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <a
            href={RESUME_HREF}
            download="Yash-Dedhia-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-3.5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Résumé
            <Download size={13} strokeWidth={2.2} />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out md:hidden",
          menuOpen ? "max-h-96 border-b" : "max-h-0"
        )}
      >
        <nav className="container flex flex-col py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="border-b border-border/60 py-3.5 text-left font-mono text-sm uppercase tracking-[0.14em] text-foreground/80 last:border-0 hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <a
            href={RESUME_HREF}
            download="Yash-Dedhia-Resume.pdf"
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-md border border-primary/40 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-primary"
          >
            Résumé <Download size={13} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
