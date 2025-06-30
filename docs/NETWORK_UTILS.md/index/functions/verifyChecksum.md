[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / verifyChecksum

# Function: verifyChecksum()

> **verifyChecksum**(`filePath`, `expectedChecksum`, `algorithm`): `Promise`\<`boolean`\>

Defined in: [fs/verifyChecksum.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/verifyChecksum.ts#L10)

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
