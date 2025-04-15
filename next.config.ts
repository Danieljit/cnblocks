/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'html.tailus.io',
            },
        ],
    },
    rewrites: async () => {
        return [
            {
                source: '/syraxai',
                destination: '/SyraxAI/page',
            },
        ];
    },
}

export default nextConfig
