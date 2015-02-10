var sha256 = require('sha256');
var serialize = require('commonform-serialize');

exports.hash = function(argument) {
  return sha256(serialize.stringify(argument));
};

exports.isDigest = (function() {
  var DIGEST_RE = /^[abcdef0123456789]{64}$/;
  return function(input) {
    return typeof input === 'string' && DIGEST_RE.test(input);
  };
})();

exports.version = '0.1.0';
