// next.config.js
import withPlugins from 'next-compose-plugins';
import withOptimizedImages from 'next-optimized-images';

const nextConfig = {
  images: {
    unoptimized: false,
    loader: 'akamai',  // Specify Akamai as the image loader
    path: '',          // Specify path, empty string assumes images are at the root
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }

    // Ensure compatibility with non-ESM modules
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

export default withPlugins([
  [
    withOptimizedImages,
    {
      optimizeImagesInDev: false,  // Enables image optimization during development
      pngquant: {                // Configure pngquant for PNG image optimization
        quality: [0.6, 0.8],
      },
      imagesPublicPath: '/_next/static/images/',  // Define custom public path for optimized images
    },
  ],
], nextConfig);  // Pass the consolidated Next.js config to withPlugins
