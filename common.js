var serialize = require('commonform-serialize')

module.exports = function (createHash) {
  return function (argument) {
    return createHash('sha256')
      .update(serialize.stringify(argument))
      .digest('hex')
  }
}
