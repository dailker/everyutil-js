[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [splitArchive](../README.md) / splitArchive

# Function: splitArchive()

> **splitArchive**(`filePath`, `maxPartSizeBytes`, `options?`): `Promise`\<`string`[]\>

Defined in: [splitArchive.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/compression/splitArchive.ts#L11)

Splits a large compressed file into smaller parts of a given size.
Supports optional encryption and password protection for each split part.

## Parameters

### filePath

`string`

Path to the archive.

### maxPartSizeBytes

`number`

Max part size in bytes.

### options?

#### encrypt?

`boolean`

#### password?

`string`

## Returns

`Promise`\<`string`[]\>

Array of part file paths.

## Author

## Dailker
