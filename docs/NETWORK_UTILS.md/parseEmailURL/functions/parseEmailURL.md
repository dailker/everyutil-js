[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseEmailURL](../README.md) / parseEmailURL

# Function: parseEmailURL()

> **parseEmailURL**(`url`): `object`

Defined in: [network/parseEmailURL.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/parseEmailURL.ts#L10)

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
