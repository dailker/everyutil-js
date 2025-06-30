[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [compressStream](../README.md) / compressStream

# Function: compressStream()

> **compressStream**(`inputStream`, `outputStream`, `options?`): `Promise`\<`void`\>

Defined in: [compressStream.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/compression/compressStream.ts#L11)

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
