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
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ],
  stats: 'none' // 构建日志信息
}