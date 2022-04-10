const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ]
}