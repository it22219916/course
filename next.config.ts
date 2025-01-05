import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/lesson",
        destination: "/login",
        permanent: false,
      },
    ];
  },
  i18n: {
    locales: ["en", "si"],
    defaultLocale: "en",
  },
};

export default nextConfig;
