const environment = (process.env.node || 'development').trim()

if(environment === 'development') {
  module.exports = require('./config/webpack.dev.config.js')
} else {
  module.exports = require('./config/webpack.prod.config.js')
}