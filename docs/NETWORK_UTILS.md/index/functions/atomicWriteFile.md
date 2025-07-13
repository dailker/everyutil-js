[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / atomicWriteFile

# Function: atomicWriteFile()

> **atomicWriteFile**(`path`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [fs/atomicWriteFile.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/atomicWriteFile.ts#L10)

Writes data to a file atomically to avoid partial writes (writes to a temp file then renames).

## Parameters

### path

`string`

File path.

### data

Data to write.

`string` | `Buffer`\<`ArrayBufferLike`\>

### options?

#### encoding?

`string`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
