[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [estimateCompressedSize](../README.md) / estimateCompressedSize

# Function: estimateCompressedSize()

> **estimateCompressedSize**(`filePath`, `options?`): `Promise`\<`number`\>

Defined in: [estimateCompressedSize.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/compression/estimateCompressedSize.ts#L10)

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
