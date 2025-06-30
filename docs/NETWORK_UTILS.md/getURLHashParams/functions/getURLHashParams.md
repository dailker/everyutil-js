[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getURLHashParams](../README.md) / getURLHashParams

# Function: getURLHashParams()

> **getURLHashParams**(`url`): `Record`\<`string`, `string`\>

Defined in: [network/getURLHashParams.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/getURLHashParams.ts#L10)

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
