[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / readFileChunk

# Function: readFileChunk()

> **readFileChunk**(`path`, `start`, `length`): `Promise`\<`Buffer`\>

Defined in: [fs/readFileChunk.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/fs/readFileChunk.ts#L10)

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

`Promise`\<`Buffer`\>

Chunk buffer.

## Author

## Dailker
