import { stringify } from 'commonform-serialize'
import { bytesToHex } from '@noble/hashes/utils.js'
import { sha256 } from '@noble/hashes/sha2.js'

export default function (argument) {
  const encoder = new TextEncoder()
  const encoded = encoder.encode(stringify(argument))
  return bytesToHex(sha256(encoded))
}
