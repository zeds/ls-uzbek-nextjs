/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
       remotePatterns: [
          {
             protocol: "https",
             hostname: "i.ytimg.com",
             pathname: "**",
          },
          {
             protocol: "https",
             hostname: "yt3.ggpht.com",
             pathname: "**",
          },
       ],
    },
 };
 
 export default nextConfig;