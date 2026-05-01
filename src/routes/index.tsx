import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}
