const ENV = process.env.ENV = process.env.NODE_ENV = 'prod';

module.exports = require('../webpack.config')({env: ENV});