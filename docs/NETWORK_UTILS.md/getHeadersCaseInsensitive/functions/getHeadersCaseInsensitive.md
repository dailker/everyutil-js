[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getHeadersCaseInsensitive](../README.md) / getHeadersCaseInsensitive

# Function: getHeadersCaseInsensitive()

> **getHeadersCaseInsensitive**(`headers`, `key`): `undefined` \| `string`

Defined in: [getHeadersCaseInsensitive.ts:7](https://github.com/dailker/everyutil/blob/2c6c8c707de5d4a5d228d272d2d21855929838e2/src/network/getHeadersCaseInsensitive.ts#L7)

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
