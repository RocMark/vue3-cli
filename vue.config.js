// vue.config.js
module.exports = {
  outputDir: 'dist', // 打包的目錄
  lintOnSave: true, // 存檔是否 Lint
  productionSourceMap: false, // production 是否生成 sitemap
  devServer: {
    open: true, // 啟動服務是否自動開啟瀏覽器
    overlay: { // 顯示錯誤訊息於頁面
      warnings: true,
      errors: true,
    },
    host: '0.0.0.0',
    port: 8066, // 修改 Port
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     target: host,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': '/',
    //     }
    //   },
    // },
  },
};
