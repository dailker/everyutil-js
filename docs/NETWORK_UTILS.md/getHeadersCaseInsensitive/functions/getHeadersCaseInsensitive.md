[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getHeadersCaseInsensitive](../README.md) / getHeadersCaseInsensitive

# Function: getHeadersCaseInsensitive()

> **getHeadersCaseInsensitive**(`headers`, `key`): `undefined` \| `string`

Defined in: [network/getHeadersCaseInsensitive.ts:7](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/getHeadersCaseInsensitive.ts#L7)

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
