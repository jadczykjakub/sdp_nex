/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/sdp_nex',
  // output: 'export',
  output: 'export', // Enables exporting as static HTML
  reactStrictMode: true, // Optional: Strict mode for React
  trailingSlash: true, // Adds trailing slashes to paths for compatibility
  images: {
    unoptimized: true, // Necessary for static export if using Next.js <Image>
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
