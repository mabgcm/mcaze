import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "McAze Renovations",
    short_name: "McAze",
    description: "Premium renovation services in the Greater Toronto Area.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icons/logo-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/logo-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
