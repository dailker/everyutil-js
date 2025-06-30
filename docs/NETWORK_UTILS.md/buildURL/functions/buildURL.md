[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [buildURL](../README.md) / buildURL

# Function: buildURL()

> **buildURL**(`base`, `params`): `string`

Defined in: [network/buildURL.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/buildURL.ts#L11)

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
