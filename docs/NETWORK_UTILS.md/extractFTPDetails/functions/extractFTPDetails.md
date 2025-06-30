[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [extractFTPDetails](../README.md) / extractFTPDetails

# Function: extractFTPDetails()

> **extractFTPDetails**(`url`): `object`

Defined in: [network/extractFTPDetails.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/extractFTPDetails.ts#L10)

Parses an FTP URL (ftp://user:pass@host:port/path).

Example: extractFTPDetails('ftp://user:pass@host:21/path')

## Parameters

### url

`string`

The FTP URL.

## Returns

`object`

Parsed info.

### host

> **host**: `string`

### password?

> `optional` **password**: `string`

### path?

> `optional` **path**: `string`

### port?

> `optional` **port**: `string`

### protocol

> **protocol**: `string`

### username?

> `optional` **username**: `string`

## Author

## Dailker
