const path = require('path')
function resolve(dir) {
  console.log('path.resolve:', path.resolve(__dirname, dir));
  return path.resolve(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  chainWebpack: config => {
    config.resolve.alias
      .set("common", resolve("src/common"))
      .set("components", resolve("src/components"))
      .set("utils", resolve("src/utils"))
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    open: true
  }
}