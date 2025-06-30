[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [removeURLParam](../README.md) / removeURLParam

# Function: removeURLParam()

> **removeURLParam**(`url`, `param`): `string`

Defined in: [network/removeURLParam.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/removeURLParam.ts#L11)

Removes a specific query parameter from a URL.

Example: removeURLParam("https://example.com?foo=bar&baz=qux", "foo") → "https://example.com?baz=qux"

## Parameters

### url

`string`

The URL string.

### param

`string`

The parameter to remove.

## Returns

`string`

The updated URL.

## Author

## Dailker
