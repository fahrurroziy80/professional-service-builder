import { motion } from "framer-motion";
import { Award, Sparkles, Tag, MapPin } from "lucide-react";

const items = [
  { icon: Award, title: "12+ Years Experience", desc: "Master stylists trained in Tokyo, Paris, and Milan." },
  { icon: Sparkles, title: "Premium Products", desc: "Only Kérastase, Olaplex, and Davines used on your hair." },
  { icon: Tag, title: "Transparent Pricing", desc: "No hidden fees — clear menu, honest consultation." },
  { icon: MapPin, title: "Prime Location", desc: "Heart of South Jakarta with valet parking & lounge." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            The Lumière <span className="text-gradient-gold italic">Difference</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-smooth shadow-sm hover:shadow-luxe"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-navy flex items-center justify-center mb-6 shadow-luxe">
                <it.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
