import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sasha P.", role: "Bride", text: "My bridal package was beyond perfection. Amelia and her team made me feel like royalty all day.", rating: 5 },
  { name: "Olivia R.", role: "Regular Client", text: "Best balayage in Jakarta — full stop. The color lasts months and the service feels like a vacation.", rating: 5 },
  { name: "Maya L.", role: "Marketing Director", text: "I come every two weeks. Calm atmosphere, expert stylists, and they always remember exactly what I love.", rating: 5 },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Loved by <span className="text-gradient-gold italic">Jakarta's Finest</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-luxe transition-smooth flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed flex-1 italic">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-serif text-lg font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
