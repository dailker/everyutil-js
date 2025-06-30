[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [estimateCompressedSize](../README.md) / estimateCompressedSize

# Function: estimateCompressedSize()

> **estimateCompressedSize**(`filePath`, `options?`): `Promise`\<`number`\>

Defined in: [estimateCompressedSize.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/compression/estimateCompressedSize.ts#L10)

Estimates the size of a file once compressed without creating the full compressed file.
Allows selection of compression method and level.

## Parameters

### filePath

`string`

Path to the file.

### options?

#### level?

`number`

#### method?

`"gzip"` \| `"deflate"`

## Returns

`Promise`\<`number`\>

Estimated compressed size in bytes.

## Author

## Dailker
