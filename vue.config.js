const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})
const path = require('path')
module.exports = {
  configureWebpack:{
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
        '@':path.resolve(__dirname,'src'),
        '@components':path.resolve(__dirname,'src/components')
      }
    }
  },
  // runtimeCompiler:true,
  // lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: {'^/api' : ''}, //转发请求时去除路径前面的/api
        changeOrigin: true  //支持跨域,如果协议主机名也不相同,必须加上
      }
    }
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}