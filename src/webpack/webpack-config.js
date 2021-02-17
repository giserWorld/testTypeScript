/*********************webpack配置文件****************/
const path = require('path');//path模块

module.exports = {
  mode: "production",//webpack打包模式,可选值"development"、"production",会改变 process.env.NODE_ENV的值
  entry: './src/index.js',//打包入口文件
  output: {//打包输出配置
    filename: 'main.min.js',//用于输出文件的文件名
    path:path.resolve(__dirname,'dist')//目标输出目录 path 的绝对路径
  }
};