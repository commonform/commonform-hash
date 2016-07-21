```javascript
var hash = require('commonform-hash')
var assert = require('assert')

assert.equal(
  hash({content: ['This is a form.']}),
  'ydf3joo7taadi3dam4kd8m9dgr3mj9usr7pq15c5fwftbjz76hmk'
)

assert.equal(
  hash({conspicuous: 'yes', content: ['This is a form.']}),
  'y7isuiyyegdqgs3g9qysoppjfz1h9kfthij6eieszbhmsxjidb6i'
)

assert.equal(
  hash({content: ['This is a form.'], conspicuous: 'yes'}),
  'y7isuiyyegdqgs3g9qysoppjfz1h9kfthij6eieszbhmsxjidb6i'
)
```
