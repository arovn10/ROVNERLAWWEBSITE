import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'rovnerlawbucket.s3.us-east-1.amazonaws.com',
      // add any other domains you need
    ],
  },
};

export default nextConfig;
