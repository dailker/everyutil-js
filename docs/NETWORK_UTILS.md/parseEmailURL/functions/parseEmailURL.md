[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseEmailURL](../README.md) / parseEmailURL

# Function: parseEmailURL()

> **parseEmailURL**(`url`): `object`

Defined in: [network/parseEmailURL.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/parseEmailURL.ts#L10)

Parses an SMTP-style email URL (smtp://user:pass@host:port).

Example: parseEmailURL('smtp://user:pass@host:25')

## Parameters

### url

`string`

The email URL.

## Returns

`object`

Parsed info.

### host

> **host**: `string`

### password?

> `optional` **password**: `string`

### port?

> `optional` **port**: `string`

### protocol

> **protocol**: `string`

### username?

> `optional` **username**: `string`

## Author

## Dailker
