/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
             hostname: 'via.placeholder.com',
       
          },
          {
            hostname:"prod-files-secure.s3.us-west-2.amazonaws.com"
          }
        ],
      },

};

export default nextConfig;



