[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / scanDirectoryForDuplicates

# Function: scanDirectoryForDuplicates()

> **scanDirectoryForDuplicates**(`dir`, `algorithm?`): `Promise`\<`string`[][]\>

Defined in: [fs/scanDirectoryForDuplicates.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/scanDirectoryForDuplicates.ts#L9)

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
