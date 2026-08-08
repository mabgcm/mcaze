import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/services/deck-fence",
        destination: "/services/deck-construction",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mcaze.ca" }],
        destination: "https://mcaze.ca/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "mcaze.com" }],
        destination: "https://mcaze.ca/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mcaze.com" }],
        destination: "https://mcaze.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
