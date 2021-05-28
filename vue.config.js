module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: '@/assets',
        common: '@/common',
        component: '@/component',
        network: '@/network',
        views: '@/views'
      }
    }
  }
}
