import type { NavItem } from "@/lib/types";

export const siteConfig = {
  name: "McAze",
  legalName: "McAze Renovations",
  url: "https://mcaze.ca",
  displayUrl: "McAze.ca",
  websites: [
    { label: "McAze.ca", href: "https://mcaze.ca" },
  ],
  logo: "/logo.png",
  footerLogo: "/logo-footer.png",
  phone: "+1 (647) 673-3343",
  whatsapp: "+1 (647) 673-3343",
  email: "info@mcaze.ca",
  emails: ["info@mcaze.ca", "samir.m@mcaze.ca"],
  address: {
    street: "5 Abbotsfield Gate Ln",
    city: "Scarborough",
    region: "ON",
    postalCode: "M1T 1N9",
    country: "CA",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=5%20Abbotsfield%20Gate%20Ln%2C%20Scarborough%2C%20ON%20M1T%201N9",
  mapEmbedUrl:
    "https://www.google.com/maps?q=5%20Abbotsfield%20Gate%20Ln%2C%20Scarborough%2C%20ON%20M1T%201N9&output=embed",
  hours: [
    "Monday to Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 3:00 PM",
    "Sunday: By appointment",
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61586759788737",
    instagram: "https://www.instagram.com/mc_aze_2020",
    youtube: "https://www.youtube.com/@mcaze_2020",
    tiktok: "https://www.tiktok.com/@mcaze.industryhom",
    x: "https://x.com/mcaze2020",
  },
};

export const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { label: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { label: "YouTube", href: siteConfig.social.youtube, icon: "youtube" },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: "tiktok" },
  { label: "X", href: siteConfig.social.x, icon: "x" },
] as const;

export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Kitchen Renovation", href: "/services/kitchen-renovation" },
      { label: "Bathroom Renovation", href: "/services/bathroom-renovation" },
      { label: "Basement Renovation", href: "/services/basement-renovation" },
      { label: "Painting", href: "/services/painting" },
      { label: "Drywall", href: "/services/drywall" },
      { label: "Flooring", href: "/services/flooring" },
      { label: "Deck Construction", href: "/services/deck-construction" },
      { label: "Fence Installation", href: "/services/fence-installation" },
      { label: "Landscaping", href: "/services/landscaping" },
      { label: "Snow Removal", href: "/services/snow-removal" },
      { label: "Demolition", href: "/services/demolition" },
      { label: "Electrical", href: "/services/electrical" },
    ],
  },
  {
    title: "Areas",
    items: [
      { label: "Vaughan", href: "/service-areas/vaughan" },
      { label: "Markham", href: "/service-areas/markham" },
      { label: "Richmond Hill", href: "/service-areas/richmond-hill" },
      { label: "Toronto", href: "/service-areas/toronto" },
    ],
  },
];
