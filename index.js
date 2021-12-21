var SHA256 = require('sha.js/sha256')
var serialize = require('commonform-serialize')

module.exports = function (argument) {
  return new SHA256()
    .update(serialize.stringify(argument))
    .digest('hex')
}
