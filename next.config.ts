import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://192.168.50.161:3000"],
  images: {
    domains: ["images.unsplash.com"], // add any other domains if needed
  },
};

export default nextConfig;
