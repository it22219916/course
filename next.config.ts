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
};

export default nextConfig;
