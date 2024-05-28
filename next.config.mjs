/** @type {import('next').NextConfig} */
import {withContentlayer} from 'next-contentlayer'
const nextConfig = { reactStrictMode: true, swcMinify: true,typescript: {
    // 忽略 TypeScript 构建错误
    ignoreBuildErrors: true,
  }, }
export default withContentlayer(nextConfig);
