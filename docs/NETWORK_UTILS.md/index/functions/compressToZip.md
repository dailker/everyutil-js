[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / compressToZip

# Function: compressToZip()

> **compressToZip**(`files`, `zipPath`, `options?`): `Promise`\<`void`\>

Defined in: [compression/compressToZip.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/compression/compressToZip.ts#L11)

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
