[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / safeWriteFile

# Function: safeWriteFile()

> **safeWriteFile**(`path`, `data`): `Promise`\<`void`\>

Defined in: [fs/safeWriteFile.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/safeWriteFile.ts#L9)

Writes data to a file atomically by writing to a temporary file first, then renaming.

## Parameters

### path

`string`

The file path.

### data

The data to write.

`string` | `Buffer`\<`ArrayBufferLike`\>

## Returns

`Promise`\<`void`\>

## Author

## Dailker
