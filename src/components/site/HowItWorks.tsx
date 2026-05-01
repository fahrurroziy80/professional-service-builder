import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Smile } from "lucide-react";

const steps = [
  { n: "01", icon: CalendarCheck, title: "Book", desc: "Reserve via WhatsApp or our online form in under a minute." },
  { n: "02", icon: MapPin, title: "Visit", desc: "Arrive to a warm welcome, signature drink, and consultation." },
  { n: "03", icon: Smile, title: "Glow", desc: "Leave radiant — and book your next visit at exclusive rates." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Three Steps to <span className="text-gradient-gold italic">Radiance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto h-32 w-32 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-gold blur-2xl opacity-30" />
                <div className="relative h-full w-full rounded-full bg-card border border-gold/30 flex items-center justify-center shadow-luxe">
                  <s.icon className="h-10 w-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-gradient-navy text-gold font-serif font-semibold flex items-center justify-center text-sm shadow-luxe">
                  {s.n}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
