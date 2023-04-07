const withPWA = require('next-pwa')({
  dest: 'public',
})
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  i18n,
})
