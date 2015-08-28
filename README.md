```javascript
var hash = require('commonform-hash')
var assert = require('assert')

assert.equal(
  hash({ content: [ 'This is a form.' ] }),
  '0cb94c21d8e303ae4785e9433afe33132b4fe76275ae96d9b2d0b10a6fdf716a')

assert.equal(
  hash({ conspicuous: 'yes', content: [ 'This is a form.' ] }),
  '76b69d4004186e35b26fb816835a92de5cfa8b1e553e45516b878bb3d35187d5' )

assert.equal(
  hash({ content: [ 'This is a form.' ], conspicuous: 'yes' }),
  '76b69d4004186e35b26fb816835a92de5cfa8b1e553e45516b878bb3d35187d5' )
```
