[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / verifyChecksum

# Function: verifyChecksum()

> **verifyChecksum**(`filePath`, `expectedChecksum`, `algorithm`): `Promise`\<`boolean`\>

Defined in: [fs/verifyChecksum.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/verifyChecksum.ts#L10)

Verifies a file's checksum against an expected value.

## Parameters

### filePath

`string`

Path to the file.

### expectedChecksum

`string`

The expected checksum value.

### algorithm

`string`

Hash algorithm.

## Returns

`Promise`\<`boolean`\>

True if checksum matches, else false.

## Author

## Dailker
