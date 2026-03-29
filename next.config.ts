import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/velmora-strategy-group-portal",
        destination: "/projects/crown-reserve-systems-portal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
