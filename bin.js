#!/usr/bin/env node
import hash from './index.js'
const buffer = []
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
    console.log(hash(parsed))
  })
