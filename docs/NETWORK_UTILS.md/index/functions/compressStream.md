[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / compressStream

# Function: compressStream()

> **compressStream**(`inputStream`, `outputStream`, `options?`): `Promise`\<`void`\>

Defined in: [compression/compressStream.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/compression/compressStream.ts#L11)

Compresses a readable stream and writes the compressed data to a writable stream.
Supports gzip, deflate, brotli.

## Parameters

### inputStream

`Readable`

Input stream.

### outputStream

`Writable`

Output stream.

### options?

#### level?

`number`

#### method?

`"gzip"` \| `"deflate"` \| `"brotli"`

#### password?

`string`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
