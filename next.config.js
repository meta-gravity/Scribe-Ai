/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
              port: '',
              // pathname: '/a/**',
          },
          // {
          //     protocol: 'https',
          //     hostname: 'avatars.githubusercontent.com',
          //     port: '',
          //     pathname: '/u/**',
          // },
      ],
  },
}

module.exports = nextConfig
