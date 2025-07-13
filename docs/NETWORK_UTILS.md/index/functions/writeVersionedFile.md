[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / writeVersionedFile

# Function: writeVersionedFile()

> **writeVersionedFile**(`path`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [fs/writeVersionedFile.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/writeVersionedFile.ts#L10)

Writes a file with versioning, saving older versions as backups with timestamps.

## Parameters

### path

`string`

File path.

### data

Data to write.

`string` | `Buffer`\<`ArrayBufferLike`\>

### options?

#### maxVersions?

`number`

## Returns

`Promise`\<`void`\>

## Author

## Dailker
