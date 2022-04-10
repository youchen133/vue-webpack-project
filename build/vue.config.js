const { merge } = require('webpack-merge')
const baseConfig = require('./vue.config.base')
const devConfig = require('./vue.config.dev')
const prodConfig = require('./vue.config.prod')

module.exports = (env, argv) => {
  console.log(argv)
  console.log(process.env.NODE_ENV, 999999931)
  const config = process.env.NODE_ENV == 'development' ? devConfig : prodConfig
  return merge(baseConfig, config) 
}