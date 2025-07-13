[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / decompressStream

# Function: decompressStream()

> **decompressStream**(`inputStream`, `outputStream`, `options?`): `Promise`\<`void`\>

Defined in: [compression/decompressStream.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/compression/decompressStream.ts#L11)

Decompresses a compressed stream using the specified method and writes the decompressed data to output.
Supports gzip, deflate, brotli.

## Parameters

### inputStream

`Readable`

Input stream.

### outputStream

`Writable`

Output stream.

### options?

#### method?

`"gzip"` \| `"deflate"` \| `"brotli"`

#### password?

`string`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
