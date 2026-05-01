import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { WA_NUMBER } from "./WhatsAppFloat";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(8, "Invalid phone").max(20).regex(/^[+0-9\s\-()]+$/, "Invalid phone"),
  service: z.string().min(1, "Choose a service"),
  date: z.string().min(1, "Pick a date"),
});

const services = [
  "Signature Haircut", "Hair Color & Balayage", "Keratin Treatment",
  "Luxury Facial", "Mani & Pedicure", "Bridal Package",
];

export function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const msg = `Halo Lumière Salon! Saya ingin booking:%0A%0ANama: ${encodeURIComponent(form.name)}%0AHP: ${encodeURIComponent(form.phone)}%0ALayanan: ${encodeURIComponent(form.service)}%0ATanggal: ${encodeURIComponent(form.date)}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to confirm your booking…");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Book Your Visit</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Reserve Your <span className="text-gradient-gold italic">Moment</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">
            Send us your details — we'll confirm your appointment via WhatsApp within minutes.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Visit Us</div>
                <div className="text-sm text-muted-foreground">Jl. Senopati No. 88, Kebayoran Baru, South Jakarta 12190</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Call / WhatsApp</div>
                <div className="text-sm text-muted-foreground">+62 812-3456-7890</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Open Hours</div>
                <div className="text-sm text-muted-foreground">Mon–Sat 09:00–21:00 · Sun 10:00–19:00</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-luxe space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={80} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp Number</Label>
            <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+62 812 3456 7890" maxLength={20} />
          </div>
          <div className="space-y-2">
            <Label>Service</Label>
            <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
              <SelectContent>
                {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          </div>
          <Button type="submit" variant="luxe" size="xl" className="w-full">
            <MessageCircle className="h-5 w-5" /> Send via WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
