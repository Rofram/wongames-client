// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'
const withTM = require('next-transpile-modules')(['@uiball/loaders'])
const withPlugins = require('next-compose-plugins')

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
