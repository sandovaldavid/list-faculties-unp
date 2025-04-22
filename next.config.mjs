/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    },
    async redirects() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
