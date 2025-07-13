[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / splitArchive

# Function: splitArchive()

> **splitArchive**(`filePath`, `maxPartSizeBytes`, `options?`): `Promise`\<`string`[]\>

Defined in: [compression/splitArchive.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/compression/splitArchive.ts#L11)

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
