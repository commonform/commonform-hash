var sha256 = require('sha256');
var serialize = require('commonform-serialize');

module.exports = function(argument) {
  return sha256(serialize.stringify(argument));
};
