[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [canonicalizeURL](../README.md) / canonicalizeURL

# Function: canonicalizeURL()

> **canonicalizeURL**(`url`): `string`

Defined in: [canonicalizeURL.ts:10](https://github.com/dailker/everyutil/blob/e265d7544f4e799da268d038a0a464c889a18367/src/network/canonicalizeURL.ts#L10)

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
