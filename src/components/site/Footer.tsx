import { Sparkles, Instagram, Facebook, Music2, MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-primary-foreground pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="font-serif text-xl font-semibold">
              Lumière<span className="text-gradient-gold"> Salon</span>
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Premium beauty experiences crafted with care in the heart of Jakarta since 2013.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Visit</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Jl. Senopati No. 88, Kebayoran Baru, South Jakarta 12190</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> +62 812-3456-7890</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Hours</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Mon–Sat: 09:00 – 21:00</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Sunday: 10:00 – 19:00</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Follow</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Music2].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gold hover:text-primary transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-primary-foreground/50">@lumieresalon.jkt</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Lumière Salon. All rights reserved.</p>
        <p>Where Elegance Begins.</p>
      </div>
    </footer>
  );
}
