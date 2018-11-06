const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')
const webpack = require('webpack')

environment.loaders.append('vue', vue)

const provide = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});
environment.plugins.append('Provide', provide);

module.exports = environment
