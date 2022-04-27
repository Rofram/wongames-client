const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')(['@uiball/loaders'])
const withPlugins = require('next-compose-plugins')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([withPWA,withTM], {
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'images.gog-statics.com',
      'localhost'
    ]
  }
})
