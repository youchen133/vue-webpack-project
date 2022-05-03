const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
  devServer: {
    hot: true,
    port: 8000,
    historyApiFallback: true,
    open: true
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ],
  stats: 'none'
}