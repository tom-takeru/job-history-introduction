/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/top',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
