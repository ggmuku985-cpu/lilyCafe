export const siteConfig = {
  name: "Café Lily",
  tagline: "Fresh coffee, warm chai, and homemade snacks.",
  subtext: "Your cozy neighborhood cafe in Nashik. Come sit, relax, and enjoy good food with great company.",
  city: "Nashik, Maharashtra",
  address: "Plot 14, Serene Boulevard, Gangapur Road, Nashik, Maharashtra 422005",
  phone: "+91 98230 45678",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919823045678",
  email: "hello@cafelily.in",
  hours: {
    weekdays: "8:00 AM – 11:00 PM",
    weekends: "8:00 AM – 11:30 PM",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cafelily.in",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gangapur+Road+Nashik+Maharashtra+422005",
  agencyCredit: "Demo website by Your Agency",
};

export function getWhatsAppOrderUrl(
  items: { name: string; quantity: number; price: number }[],
  total: number
): string {
  if (items.length === 0) {
    const text = encodeURIComponent(
      `Hello ${siteConfig.name}! I would like to inquire about your menu and placing an order.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  }

  const itemsList = items
    .map((item) => `• ${item.quantity}x ${item.name} (₹${item.price * item.quantity})`)
    .join("\n");

  const message = `Namaste ${siteConfig.name}! ☕\n\nI would like to place an order:\n\n${itemsList}\n\n*Total Amount:* ₹${total.toLocaleString("en-IN")}\n\nPlease confirm availability and payment. Thank you!`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(purpose = "general"): string {
  let message = `Hello ${siteConfig.name}! I'd like to ask a quick question.`;
  if (purpose === "table") {
    message = `Namaste ${siteConfig.name}! I would like to book a table for today. Please let me know availability.`;
  } else if (purpose === "event") {
    message = `Namaste ${siteConfig.name}! I'm interested in attending your upcoming weekend event.`;
  }
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

