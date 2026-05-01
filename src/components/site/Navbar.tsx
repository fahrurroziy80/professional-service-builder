import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#how", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-gold" />
          <span className="font-serif text-xl font-semibold tracking-tight">
            Lumière<span className="text-gradient-gold"> Salon</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="luxe" size="sm" asChild className="hidden sm:inline-flex">
            <a href="#contact">Book Now</a>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
