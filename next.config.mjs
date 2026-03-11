/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/doctors',
        permanent: true,
      },
      {
        source: '/smile-pro',
        destination: '/treatments',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
