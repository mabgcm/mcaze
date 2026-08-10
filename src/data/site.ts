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
  { label: "Careers", href: "/careers" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Basement Renovation", href: "/services/basement-renovation" },
      { label: "Bathroom Renovation", href: "/services/bathroom-renovation" },
      { label: "Commercial Renovation", href: "/services/commercial-renovation" },
      { label: "Deck Construction", href: "/services/deck-construction" },
      { label: "Demolition Services", href: "/services/demolition" },
      { label: "Drywall Installation & Repair", href: "/services/drywall" },
      { label: "Electrical", href: "/services/electrical" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "Fence Installation", href: "/services/fence-installation" },
      { label: "Flooring", href: "/services/flooring" },
      { label: "Full Home Renovation", href: "/services/full-home-renovation" },
      { label: "General Contracting", href: "/services/general-contracting" },
      { label: "Home Additions & Custom Renovations", href: "/services/home-additions-custom-renovations" },
      { label: "Interior Painting", href: "/services/painting" },
      { label: "Kitchen Renovation", href: "/services/kitchen-renovation" },
      { label: "Landscaping", href: "/services/landscaping" },
      { label: "Roofing Services", href: "/services/roofing-services" },
      { label: "Snow Removal", href: "/services/snow-removal" },
    ],
  },
  {
    title: "Areas",
    items: [
      { label: "Aurora", href: "/service-areas/aurora" },
      { label: "Barrie", href: "/service-areas/barrie" },
      { label: "Concord", href: "/service-areas/concord" },
      { label: "Maple", href: "/service-areas/maple" },
      { label: "Markham", href: "/service-areas/markham" },
      { label: "Mississauga", href: "/service-areas/mississauga" },
      { label: "Newmarket", href: "/service-areas/newmarket" },
      { label: "North York", href: "/service-areas/north-york" },
      { label: "Richmond Hill", href: "/service-areas/richmond-hill" },
      { label: "Thornhill", href: "/service-areas/thornhill" },
      { label: "Toronto", href: "/service-areas/toronto" },
      { label: "Vaughan", href: "/service-areas/vaughan" },
      { label: "Woodbridge", href: "/service-areas/woodbridge" },
    ],
  },
];
