const ENV = process.env.ENV = process.env.NODE_ENV = 'dev';

module.exports = require('../webpack.config')({env: ENV});