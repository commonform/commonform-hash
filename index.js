var shajs = require('sha.js')
var serialize = require('commonform-serialize')

module.exports = function (argument) {
  return shajs('sha256')
    .update(serialize.stringify(argument))
    .digest('hex')
}
