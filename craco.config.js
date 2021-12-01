const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@forms': path.resolve(__dirname, './src/forms'),
      '@styles/*': path.resolve(__dirname, './src/styles/*'),
      '@utils/*': path.resolve(__dirname, './src/utils/*'),
      '@hooks/*': path.resolve(__dirname, './src/hooks/*'),
    },
  },
}
