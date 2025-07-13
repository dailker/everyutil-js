[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / readFileChunk

# Function: readFileChunk()

> **readFileChunk**(`path`, `start`, `length`): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Defined in: [fs/readFileChunk.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/readFileChunk.ts#L10)

Reads a specific chunk of bytes from a file, useful for partial downloads or previews.

## Parameters

### path

`string`

File path.

### start

`number`

Start byte.

### length

`number`

Number of bytes to read.

## Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Chunk buffer.

## Author

## Dailker
