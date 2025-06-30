[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / compressStream

# Function: compressStream()

> **compressStream**(`inputStream`, `outputStream`, `options?`): `Promise`\<`void`\>

Defined in: [compression/compressStream.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/compression/compressStream.ts#L11)

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
