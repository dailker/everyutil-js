[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / estimateCompressedSize

# Function: estimateCompressedSize()

> **estimateCompressedSize**(`filePath`, `options?`): `Promise`\<`number`\>

Defined in: [compression/estimateCompressedSize.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/compression/estimateCompressedSize.ts#L10)

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
