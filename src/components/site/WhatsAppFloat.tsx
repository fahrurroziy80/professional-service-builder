import { MessageCircle } from "lucide-react";

const WA_NUMBER = "6281234567890"; // placeholder

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=Halo%20Lumi%C3%A8re%20Salon%2C%20saya%20ingin%20booking`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 text-white shadow-luxe hover:scale-110 transition-smooth animate-float">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}

export { WA_NUMBER };
