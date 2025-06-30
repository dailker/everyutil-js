[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseSetCookie](../README.md) / parseSetCookie

# Function: parseSetCookie()

> **parseSetCookie**(`header`): `object`[]

Defined in: [network/parseSetCookie.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/parseSetCookie.ts#L10)

Parses multiple Set-Cookie headers from a string or array.

Example: parseSetCookie("a=1; Path=/, b=2; Path=/") → [{ name: 'a', value: '1', ... }, ...]

## Parameters

### header

Set-Cookie header(s).

`string` | `string`[]

## Returns

`object`[]

Parsed cookies.

## Author

## Dailker
