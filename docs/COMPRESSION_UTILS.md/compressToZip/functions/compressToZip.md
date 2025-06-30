[**COMPRESSION_UTILS**](../../README.md)

***

[COMPRESSION_UTILS](../../README.md) / [compressToZip](../README.md) / compressToZip

# Function: compressToZip()

> **compressToZip**(`files`, `zipPath`, `options?`): `Promise`\<`void`\>

Defined in: [compressToZip.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/compression/compressToZip.ts#L11)

Compresses multiple files into a ZIP archive at the specified destination.
Note: Password protection is not supported by adm-zip (option is ignored).

## Parameters

### files

`string`[]

Files to compress.

### zipPath

`string`

Destination ZIP path.

### options?

#### compressionLevel?

`number`

#### encrypt?

`boolean`

#### password?

`string`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
