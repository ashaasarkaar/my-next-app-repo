/** @type {import('next').NextConfig} */
// https://images.unsplash.com/photo-1723296637578-95124ce6024b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

// 'https://i.ibb.co.com/FbNYdFM5/The-Dating-Play-Book-For-Men-Book.png'
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
       {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/FbNYdFM5/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
