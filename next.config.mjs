/** @type {import('next').NextConfig} */
const nextConfig = {
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
