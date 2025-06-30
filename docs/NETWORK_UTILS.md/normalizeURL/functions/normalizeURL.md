[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [normalizeURL](../README.md) / normalizeURL

# Function: normalizeURL()

> **normalizeURL**(`url`): `string`

Defined in: [network/normalizeURL.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/normalizeURL.ts#L10)

Normalizes a URL: removes trailing slashes, sorts query params, etc.

Example: normalizeURL('https://a.com/foo/?b=2&a=1') → 'https://a.com/foo?a=1&b=2'

## Parameters

### url

`string`

The URL to normalize.

## Returns

`string`

The normalized URL.

## Author

## Dailker
