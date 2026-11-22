import type { NextConfig } from "next";

const resumeNoCacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=0, must-revalidate",
  },
] as const;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/media/resume-software.pdf",
        headers: [...resumeNoCacheHeaders],
      },
      {
        source: "/media/resume-embedded.pdf",
        headers: [...resumeNoCacheHeaders],
      },
      {
        source: "/media/resume-hardware.pdf",
        headers: [...resumeNoCacheHeaders],
      },
    ];
  },
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
