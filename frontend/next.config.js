/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const rewrites = async () => {
  return [
    {
      source: "/:path*",
      destination: "http://43.201.107.89/:path*",
      // destination: "http://localhost:3001/:path*",
    },
  ];
};

module.exports = { nextConfig, rewrites };
