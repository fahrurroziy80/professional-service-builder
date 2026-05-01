import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Lumière Salon premium interior"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-primary-foreground"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-6">
            <Star className="h-3.5 w-3.5 text-gold fill-gold" />
            <span className="text-xs font-medium tracking-wider uppercase text-gold">
              Rated 4.9 · 800+ Happy Clients
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Where Elegance <br />
            <span className="text-gradient-gold italic">Begins.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
            Premium hair, skin, and bridal beauty crafted by master stylists
            in the heart of Jakarta. An experience as refined as you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="luxe" size="xl" asChild>
              <a href="#contact">
                Book Now <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-primary-foreground/70 text-sm">
            <div>
              <div className="font-serif text-3xl text-gold">12+</div>
              <div>Years of Craft</div>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <div className="font-serif text-3xl text-gold">25</div>
              <div>Master Stylists</div>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <div className="font-serif text-3xl text-gold">4.9★</div>
              <div>Google Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
