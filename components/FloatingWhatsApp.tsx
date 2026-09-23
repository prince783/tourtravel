import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { business } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${business.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-float-button fixed bottom-20 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_12px_28px_rgba(16,185,129,0.45)] transition hover:scale-105 md:bottom-6 md:right-6"
    >
      <span className="wa-float-button-ping" aria-hidden="true" />
      <MessageCircle size={26} />
    </Link>
  );
}
