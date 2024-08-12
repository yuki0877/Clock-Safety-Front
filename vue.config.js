const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  devServer: {
    proxy: {
      "/api/v1": {
        target: "https://clock-safety.onrender.com",
      }
    }
  }
})
