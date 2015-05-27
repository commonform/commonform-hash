var test = require('tape');
var hash = require('..');

test('Hash Function', function(test) {
  test.equal(
    hash({content: ['This is a form.']}),
    '0cb94c21d8e303ae4785e9433afe33132b4fe76275ae96d9b2d0b10a6fdf716a',
    'hash function produces a known digest'
  );

  test.equal(
    hash({conspicuous: 'yes', content: ['This is a form.']}),
    '76b69d4004186e35b26fb816835a92de5cfa8b1e553e45516b878bb3d35187d5',
    'hash function correctly hashes a form with unsorted keys'
  );

  test.end();
});
