// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',       // user visits /
        destination: '/home' // show /home content, but keep URL as /
      }
    ];
  } 
};

export default nextConfig;
