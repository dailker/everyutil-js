[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [mergeArchives](../README.md) / mergeArchives

# Function: mergeArchives()

> **mergeArchives**(`parts`, `outputFilePath`, `options?`): `Promise`\<`void`\>

Defined in: [mergeArchives.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/compression/mergeArchives.ts#L11)

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
