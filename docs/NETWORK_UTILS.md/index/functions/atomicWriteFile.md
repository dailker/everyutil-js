[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / atomicWriteFile

# Function: atomicWriteFile()

> **atomicWriteFile**(`path`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [fs/atomicWriteFile.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/fs/atomicWriteFile.ts#L10)

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
