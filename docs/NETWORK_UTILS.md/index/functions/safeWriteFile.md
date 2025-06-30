[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / safeWriteFile

# Function: safeWriteFile()

> **safeWriteFile**(`path`, `data`): `Promise`\<`void`\>

Defined in: [fs/safeWriteFile.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/safeWriteFile.ts#L9)

Writes data to a file atomically by writing to a temporary file first, then renaming.

## Parameters

### path

`string`

The file path.

### data

The data to write.

`string` | `Buffer`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
