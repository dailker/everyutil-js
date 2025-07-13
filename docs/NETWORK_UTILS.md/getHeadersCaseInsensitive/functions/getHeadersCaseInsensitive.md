[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getHeadersCaseInsensitive](../README.md) / getHeadersCaseInsensitive

# Function: getHeadersCaseInsensitive()

> **getHeadersCaseInsensitive**(`headers`, `key`): `undefined` \| `string`

Defined in: [network/getHeadersCaseInsensitive.ts:7](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/getHeadersCaseInsensitive.ts#L7)

Retrieve HTTP header value ignoring case.

## Parameters

### headers

Headers object or plain object.

`Record`\<`string`, `string`\> | `Headers`

### key

`string`

Header key to search for.

## Returns

`undefined` \| `string`

The header value or undefined.
