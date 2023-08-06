// offline config passed to workbox-build.
module.exports = {
    globPatterns: ['**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}'],
    // Static file collection. If your site uses file types like webp, add them here.
    globDirectory: 'public',
    swDest: 'public/service-worker.js',
    maximumFileSizeToCacheInBytes: 10485760, // Cache maximum file size in bytes.
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [ // If you need to load CDN resources, configure this option. If not, you can skip this.
      // CDNs - should be CacheFirst, since they should be used specific versions so should not change
      {
        urlPattern: /^https:\/\/cdn\.example\.com\/.*/, // Replace with your URL
        handler: 'CacheFirst'
      }
    ]
  }
  
