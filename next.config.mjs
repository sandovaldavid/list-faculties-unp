/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
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
