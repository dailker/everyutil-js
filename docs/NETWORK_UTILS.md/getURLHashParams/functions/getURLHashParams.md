[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getURLHashParams](../README.md) / getURLHashParams

# Function: getURLHashParams()

> **getURLHashParams**(`url`): `Record`\<`string`, `string`\>

Defined in: [getURLHashParams.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/getURLHashParams.ts#L10)

Parses the hash fragment of a URL as key-value pairs.

Example: getURLHashParams("/a#foo=1&bar=2") → { foo: "1", bar: "2" }

## Parameters

### url

`string`

The URL.

## Returns

`Record`\<`string`, `string`\>

Hash params.

## Author

## Dailker
