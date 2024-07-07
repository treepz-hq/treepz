/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  /* images: {
    domains: ["img.youtube.com"],
  }, */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
   async rewrites() {
    return [
      {
        source: '/gear-up/:path*',
        destination: '/gear-up/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
