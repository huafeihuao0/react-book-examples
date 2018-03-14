/**
* webpack配置文件
* */
var path = require('path');

module.exports =
{
    entry: './src/app.js',    //入口文件
    output://输出
        {
            publicPath: '/build/',//公共目录
            path: path.join(__dirname, 'build'),
            filename: 'app.bundle.js',
        },
    devtool: 'sourcemap', //开发工具
    module: //依赖的插件模块
      {
        loaders:
            [
                {
                    loader: 'babel',    //babel转换器
                    include: path.join(__dirname, 'src'),//扫描目录
                    test: /\.js$/,//js匹配
                },
                {
                    loader: "style!css",    //css模块化
                    test: /\.css$/,//匹配css
                }
            ]
      }
};
