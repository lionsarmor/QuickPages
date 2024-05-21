const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['finer-finish-drywall-6003de34b6c9.herokuapp.com'],
    port: process.env.PORT || 8080
  }
})
