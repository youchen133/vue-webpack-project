const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 生成的 js 文件名称
    filename: process.env.NODE_ENV == 'production' ? 'app.[chunkhash:8].js' : 'app.[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: '[name]/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: 'img/[name].[hash].[ext]'
        }
        //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
        //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    //引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json'],
    //缩写扩展
    alias: {
      //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'testetsttest'
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: 'public'
    }]),
    new webpack.DefinePlugin({
      SOMETHING: JSON.stringify('this is something!')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })
  ]
}