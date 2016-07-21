var serialize = require('commonform-serialize')
var zbase32 = require('zbase32').encode

module.exports = function (createHash) {
  return function (argument) {
    return zbase32(
      createHash('sha256')
      .update(serialize.stringify(argument), 'utf-8')
      .digest()
    )
  }
}
