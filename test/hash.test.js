/* jshint node: true, mocha: true */
var Immutable = require('immutable');
var expect = require('chai').expect;
var hashing = require('..');

var fromJS = Immutable.fromJS.bind(Immutable);

describe('Hash function', function() {
  it('produces a valid digest', function() {
    var form = fromJS({content: ['test']});
    expect(hashing.isDigest(hashing.hash(form)))
      .to.be.true();
  });

  it('produces a known digest', function() {
    var form = fromJS({content: ['This is a form.']});
    expect(hashing.hash(form)).to.equal(
      '0cb94c21d8e303ae4785e9433afe33132b4fe76275ae96d9b2d0b10a6fdf716a'
    );
  });

  it('correctly digests form with unsorted keys', function() {
    var form = fromJS({
      conspicuous: 'true',
      content: ['This is a form.']
    });
    expect(hashing.hash(form)).to.equal(
      '57abf1da047f7d0d4dd56ffe6a03b1e6bb4498d22b6de77546ff4ba9d5bf5006'
    );
  });
});
