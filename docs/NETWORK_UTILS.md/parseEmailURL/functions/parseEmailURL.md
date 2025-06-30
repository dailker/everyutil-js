[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseEmailURL](../README.md) / parseEmailURL

# Function: parseEmailURL()

> **parseEmailURL**(`url`): `object`

Defined in: [network/parseEmailURL.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/parseEmailURL.ts#L10)

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
