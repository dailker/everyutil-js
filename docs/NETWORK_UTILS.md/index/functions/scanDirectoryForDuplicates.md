[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / scanDirectoryForDuplicates

# Function: scanDirectoryForDuplicates()

> **scanDirectoryForDuplicates**(`dir`, `algorithm?`): `Promise`\<`string`[][]\>

Defined in: [fs/scanDirectoryForDuplicates.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/scanDirectoryForDuplicates.ts#L9)

Scans a directory for duplicate files by comparing file hashes.

## Parameters

### dir

`string`

Directory to scan.

### algorithm?

`string` = `'sha256'`

Hash algorithm.

## Returns

`Promise`\<`string`[][]\>

Array of arrays of duplicate file paths.

## Author

## Dailker
