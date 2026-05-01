import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Heart, Hand, Crown } from "lucide-react";

const services = [
  { icon: Scissors, name: "Signature Haircut", desc: "Personalized cut & blow-dry by senior stylists.", price: "250.000" },
  { icon: Palette, name: "Hair Color & Balayage", desc: "Premium color, highlights, and balayage technique.", price: "850.000" },
  { icon: Sparkles, name: "Keratin Treatment", desc: "Smoothing keratin therapy for lasting shine.", price: "1.200.000" },
  { icon: Heart, name: "Luxury Facial", desc: "Deep cleanse, brighten, and hydrate your skin.", price: "450.000" },
  { icon: Hand, name: "Mani & Pedicure", desc: "Spa manicure-pedicure with gel polish option.", price: "350.000" },
  { icon: Crown, name: "Bridal Package", desc: "Hair, makeup, and styling for your big day.", price: "3.500.000" },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Curated Beauty, <span className="text-gradient-gold italic">Crafted for You</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From everyday refinement to bridal perfection — every service is a ritual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-gold/60 hover:shadow-luxe transition-smooth"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-gold">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-2">{s.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-baseline justify-between border-t border-border pt-4">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</span>
                <span className="font-serif text-xl text-foreground">
                  Rp<span className="text-gradient-gold font-semibold">{s.price}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
