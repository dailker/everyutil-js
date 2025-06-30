[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [atomicWriteFile](../README.md) / atomicWriteFile

# Function: atomicWriteFile()

> **atomicWriteFile**(`path`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [atomicWriteFile.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/atomicWriteFile.ts#L10)

Writes data to a file atomically to avoid partial writes (writes to a temp file then renames).

## Parameters

### path

`string`

File path.

### data

Data to write.

`string` | `Buffer`

### options?

#### encoding?

`string`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
