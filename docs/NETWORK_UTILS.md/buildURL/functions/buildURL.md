[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [buildURL](../README.md) / buildURL

# Function: buildURL()

> **buildURL**(`base`, `params`): `string`

Defined in: [buildURL.ts:11](https://github.com/dailker/everyutil/blob/e265d7544f4e799da268d038a0a464c889a18367/src/network/buildURL.ts#L11)

Constructs a full URL with query parameters from a base URL and params object.

Example: buildURL("https://example.com", { foo: "bar" }) → "https://example.com?foo=bar"

## Parameters

### base

`string`

The base URL.

### params

`Record`\<`string`, `any`\>

Query parameters as an object.

## Returns

`string`

The constructed URL.

## Author

## Dailker
