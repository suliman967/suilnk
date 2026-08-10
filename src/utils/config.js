/**
 * Site-wide configuration.
 * Edit the values below to update links, booking, and contact details
 * across the entire site — nothing else needs to change.
 */

export const site = {
  name: "Suliman",
  brand: "Suilnk",
  domain: "suilnk.com",
  tagline: "Turn your audience into a brand.",
  description:
    "Suliman builds and manages merchandise operations for creators, from Shopify and product setup to print-on-demand and fulfillment.",
};

export const links = {
  // Used by every "Book a Call" CTA on the site.
  booking: "https://calendly.com/hi-suilnk/30min",

  // If you have a Calendly / Cal.com embed link, paste it here to render a
  // live calendar in the Booking section instead of a button-only CTA.
  // Leave empty to keep the clean button-only version.
  bookingEmbed: "",

  loom: "https://www.loom.com/share/6e60a74758d847b1a939da4b64d4a95d",

  email: "hi@suilnk.com",

  social: {
    x: "https://x.com/suilnk"
  },
};

// Primary nav — keep this short. Each id must match a section's `id` prop.
export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#solution" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
