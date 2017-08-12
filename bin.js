#!/usr/bin/env node
var buffer = []
process.stdin
  .on('data', function (chunk) {
    buffer.push(chunk)
  })
  .once('error', function (error) {
    console.error(error)
    process.exit(1)
  })
  .once('end', function () {
    var parsed
    try {
      parsed = JSON.parse(Buffer.concat(buffer))
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
    console.log(require('./')(parsed))
  })
