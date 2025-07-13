[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseForwardedHeader](../README.md) / parseForwardedHeader

# Function: parseForwardedHeader()

> **parseForwardedHeader**(`headers`): `object`

Defined in: [network/parseForwardedHeader.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/parseForwardedHeader.ts#L10)

Extracts original IPs/ports from X-Forwarded-* headers.

Example: parseForwardedHeader(headers)

## Parameters

### headers

`Record`\<`string`, `string`\>

Headers object.

## Returns

`object`

Parsed info.

### for?

> `optional` **for**: `string`

### host?

> `optional` **host**: `string`

### proto?

> `optional` **proto**: `string`

## Author

## Dailker
