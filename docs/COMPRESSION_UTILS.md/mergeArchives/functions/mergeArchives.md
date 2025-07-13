[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [mergeArchives](../README.md) / mergeArchives

# Function: mergeArchives()

> **mergeArchives**(`parts`, `outputFilePath`, `options?`): `Promise`\<`void`\>

Defined in: [mergeArchives.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/compression/mergeArchives.ts#L11)

Merges previously split archive parts back into a single compressed archive.
Supports optional decryption with password.

## Parameters

### parts

`string`[]

Array of part file paths.

### outputFilePath

`string`

Output file path.

### options?

#### decrypt?

`boolean`

#### password?

`string`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
