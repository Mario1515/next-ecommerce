/** @type {import('next').NextConfig} */

const nextConfig = {
images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: "images.pexels.com"
        },
        {
            protocol: 'https',
            hostname: "ingiliz.bg"
        },
    ],
  },
};

export default nextConfig;
