"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppGeneralUrl, siteConfig } from "@/lib/site-config";

export function WhatsAppFloatingButton() {
  const whatsappUrl = getWhatsAppGeneralUrl("general");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Café Lily on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 text-white shadow-warm-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-300 font-sans text-xs font-semibold group focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <div className="flex h-5 w-5 items-center justify-center">
        <MessageCircle className="h-5 w-5 fill-current" />
      </div>
      <span className="hidden sm:inline">Order on WhatsApp</span>
    </a>
  );
}
