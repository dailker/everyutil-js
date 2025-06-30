[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [mergeArchives](../README.md) / mergeArchives

# Function: mergeArchives()

> **mergeArchives**(`parts`, `outputFilePath`, `options?`): `Promise`\<`void`\>

Defined in: [mergeArchives.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/compression/mergeArchives.ts#L11)

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
