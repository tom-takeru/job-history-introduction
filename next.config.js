/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/top',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
