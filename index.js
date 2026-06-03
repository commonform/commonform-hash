import { sha256 } from '@noble/hashes/sha2.js'
import serialize from 'commonform-serialize'

export default function (argument) {
  return sha256.create()
    .update(new TextEncoder().encode(serialize.stringify(argument)))
    .digest()
    .toHex()
}
