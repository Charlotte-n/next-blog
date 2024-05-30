/** @type {import('next').NextConfig} */
import {withContentlayer} from 'next-contentlayer'
const nextConfig = { reactStrictMode: true, swcMinify: true,typescript: {
    // 忽略 TypeScript 构建错误
    ignoreBuildErrors: true,
  },
    async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://external-api.example.com/:path*', // 代理到外部API
      },
    ];
  },

}
export default withContentlayer(nextConfig);
