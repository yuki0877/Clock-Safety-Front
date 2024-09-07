const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/Clock-Safety-Front/' : '/',
  devServer: {
    proxy: {
      '/api/v1': {
        target: process.env.VUE_APP_API_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api/v1': '',
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      new (require('webpack').DefinePlugin)({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
})
