// @ts-check
import withPlaiceholder from "@plaiceholder/next";
/*
    Plaiceholder docs: https://plaiceholder.co/docs
*/

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withPlaiceholder(config);
