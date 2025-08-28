import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    buildActivity: false,
    position: 'bottom-left',
  },
  experimental: {
    nextScriptWorkers: false,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Remove Next.js portal plugin in development
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'NextJsPortalPlugin'
      );
    }
    return config;
  },
};

export default nextConfig;
