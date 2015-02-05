var crypto = require('crypto');
var serialize = require('commonform-serialize');

exports.hash = function(argument) {
  return crypto.createHash('sha256')
    .update(serialize.stringify(argument), 'ascii')
    .digest('hex');
};

exports.isDigest = (function() {
  var DIGEST_RE = /^[abcdef0123456789]{64}$/;
  return function(input) {
    return typeof input === 'string' && DIGEST_RE.test(input);
  };
})();
