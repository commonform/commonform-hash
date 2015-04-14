/* jshint node: true, mocha: true */
var expect = require('chai').expect;
var hash = require('..');

describe('Hash function', function() {
  it('produces a known digest', function() {
    var form = {content: ['This is a form.']};
    expect(hash(form)).to.equal(
      '0cb94c21d8e303ae4785e9433afe33132b4fe76275ae96d9b2d0b10a6fdf716a'
    );
  });

  it('correctly digests form with unsorted keys', function() {
    var form = {
      conspicuous: 'yes',
      content: ['This is a form.']
    };
    expect(hash(form)).to.equal(
      '76b69d4004186e35b26fb816835a92de5cfa8b1e553e45516b878bb3d35187d5'
    );
  });
});
