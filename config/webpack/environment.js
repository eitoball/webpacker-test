const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')
const webpack = require('webpack')

environment.loaders.append('vue', vue)
// fotorama の CSS に含まれる url のパスを解決する。sass-loader の後、css-loader の
// 前に resolve-url-loader を入れる必要がある。
const sass = environment.loaders.get('sass')
sass.use.splice(sass.use.length - 2, 0, { loader: 'resolve-url-loader' })

const provide = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});
environment.plugins.append('Provide', provide);

module.exports = environment
