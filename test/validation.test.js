/* jshint node: true, mocha: true */
var crypto = require('crypto');
var expect = require('chai').expect;
var hashing = require('..');

describe('Digests', function() {
  it('are SHA-256 hex digests', function() {
    var digest = crypto.createHash('sha256')
      .update('')
      .digest('hex');
    expect(hashing.isDigest(digest))
      .to.be.true();
  });
});
