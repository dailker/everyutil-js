[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getURLHashParams](../README.md) / getURLHashParams

# Function: getURLHashParams()

> **getURLHashParams**(`url`): `Record`\<`string`, `string`\>

Defined in: [network/getURLHashParams.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/getURLHashParams.ts#L10)

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
