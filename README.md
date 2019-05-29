# commonform-hash

cryptographically hash Common Forms

This package wraps different implementations of SHA-256, one for the browser, via [browserify](http://browserify.org/), and the other for Node.js, via the [core `crypto` module](https://nodejs.org/api/crypto.html).

```javascript
var hash = require('commonform-hash')
var assert = require('assert')

assert.strictEqual(
  hash({ content: [ 'This is a form.' ] }),
  '0cb94c21d8e303ae4785e9433afe33132b4fe76275ae96d9b2d0b10a6fdf716a'
)

assert.strictEqual(
  hash({ conspicuous: 'yes', content: [ 'This is a form.' ] }),
  '76b69d4004186e35b26fb816835a92de5cfa8b1e553e45516b878bb3d35187d5'
)

assert.strictEqual(
  hash({ content: [ 'This is a form.' ], conspicuous: 'yes' }),
  '76b69d4004186e35b26fb816835a92de5cfa8b1e553e45516b878bb3d35187d5'
)
```
