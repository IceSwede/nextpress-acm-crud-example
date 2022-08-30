/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['wp.nextpress.eu'],
  },
};

/** The following is needed in order to use my Dockerfile
 * https://nextjs.org/docs/advanced-features/output-file-tracing
 */

module.exports = {
  experimental: {
    outputStandalone: true,
  },
};
