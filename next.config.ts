import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize builds
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Turbopack configuration (Next.js 16 default)
  turbopack: {
    // Empty config to silence warnings
  },
};

export default nextConfig;
