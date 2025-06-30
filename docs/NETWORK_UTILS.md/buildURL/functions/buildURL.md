[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [buildURL](../README.md) / buildURL

# Function: buildURL()

> **buildURL**(`base`, `params`): `string`

Defined in: [buildURL.ts:11](https://github.com/dailker/everyutil/blob/2c6c8c707de5d4a5d228d272d2d21855929838e2/src/network/buildURL.ts#L11)

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
