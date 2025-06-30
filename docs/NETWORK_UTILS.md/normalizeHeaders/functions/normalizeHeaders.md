[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [normalizeHeaders](../README.md) / normalizeHeaders

# Function: normalizeHeaders()

> **normalizeHeaders**(`headers`): `Record`\<`string`, `string`\>

Defined in: [normalizeHeaders.ts:10](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/normalizeHeaders.ts#L10)

Normalizes headers to lowercase keys (plain object only).

Example: normalizeHeaders({ 'X-Foo': 'bar' }) → { 'x-foo': 'bar' }

## Parameters

### headers

`Record`\<`string`, `string`\>

Headers object.

## Returns

`Record`\<`string`, `string`\>

Normalized headers.

## Author

## Dailker
