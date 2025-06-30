[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [normalizeHeaders](../README.md) / normalizeHeaders

# Function: normalizeHeaders()

> **normalizeHeaders**(`headers`): `Record`\<`string`, `string`\>

Defined in: [normalizeHeaders.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/normalizeHeaders.ts#L10)

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
