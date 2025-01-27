/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/faculties',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
