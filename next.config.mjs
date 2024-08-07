/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/sdp_nex',
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['next-mdx-remote'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
