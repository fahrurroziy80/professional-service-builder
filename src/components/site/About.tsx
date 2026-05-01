import { motion } from "framer-motion";
import owner from "@/assets/owner.jpg";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-navy text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-gold blur-3xl opacity-20 rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-luxe max-w-md">
            <img src={owner} alt="Amelia Hartono, founder of Lumière Salon" loading="lazy" width={900} height={1100} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-card text-card-foreground rounded-2xl p-5 shadow-luxe max-w-[220px]">
            <Quote className="h-5 w-5 text-gold mb-2" />
            <p className="text-sm italic leading-snug">"Beauty is confidence — we just bring it out."</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Meet The Founder</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Amelia Hartono <br />
            <span className="text-gradient-gold italic">Master Stylist</span>
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed">
            Trained in Tokyo and certified by L'Oréal Paris Academy, Amelia has
            spent over 12 years perfecting the art of personalized beauty.
            Lumière Salon was born from her belief that every client deserves a
            sanctuary — a place where craft, calm, and care meet.
          </p>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed">
            Today she leads a team of 25 stylists who share that same passion,
            serving over 800 clients a month from across Jakarta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
