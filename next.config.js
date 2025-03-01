/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
  },
  output: 'standalone',
  reactStrictMode: false,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  compiler: {
    styledComponents: true, // Enables Next.js built-in styled-components support
  },
};

module.exports = nextConfig;
