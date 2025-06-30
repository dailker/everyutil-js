[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseSetCookie](../README.md) / parseSetCookie

# Function: parseSetCookie()

> **parseSetCookie**(`header`): `object`[]

Defined in: [parseSetCookie.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/parseSetCookie.ts#L10)

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
