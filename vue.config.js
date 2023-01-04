const path = require('path')
module.exports = {
  assetsDir: 'assets',
  publicPath: process.env.NODE_ENV === 'production' ? '/po/' : '/',
  devServer: {
    proxy: {
      '^/cm/gres': {
        target: 'http://192.168.210.58',
      },
       '^/cm': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/cm': '' },
      },
      
    },
    https: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        
        '@example': path.join(__dirname, 'src/modules/example'),
        
      },
    },
    devtool: 'source-map',
  },
}
