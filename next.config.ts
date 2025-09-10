import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "freepik.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "placehold.co",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
