/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ["dd-trace"],
  },
};

export default nextConfig;
