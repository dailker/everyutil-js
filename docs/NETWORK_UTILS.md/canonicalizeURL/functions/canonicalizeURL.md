[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [canonicalizeURL](../README.md) / canonicalizeURL

# Function: canonicalizeURL()

> **canonicalizeURL**(`url`): `string`

Defined in: [canonicalizeURL.ts:10](https://github.com/dailker/everyutil/blob/db1e809d4c097dd2ba5f952e07c115f09a518c6c/src/network/canonicalizeURL.ts#L10)

Canonicalizes a URL: lowercase host, remove default ports, sort params.

Example: canonicalizeURL("HTTP://A.COM:80/?b=2&a=1") → "http://a.com/?a=1&b=2"

## Parameters

### url

`string`

The URL to canonicalize.

## Returns

`string`

The canonical URL.

## Author

## Dailker
