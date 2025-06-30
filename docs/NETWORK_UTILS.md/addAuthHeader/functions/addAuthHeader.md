[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [addAuthHeader](../README.md) / addAuthHeader

# Function: addAuthHeader()

> **addAuthHeader**(`headers`, `token`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [addAuthHeader.ts:11](https://github.com/dailker/everyutil/blob/db1e809d4c097dd2ba5f952e07c115f09a518c6c/src/network/addAuthHeader.ts#L11)

Adds a Bearer token to request headers.

Example: addAuthHeader({}, token) → { Authorization: 'Bearer ...' }

## Parameters

### headers

Headers object or plain object.

`Record`\<`string`, `string`\> | `Headers`

### token

`string`

The JWT token.

## Returns

`Record`\<`string`, `string`\> \| `Headers`

Headers with Authorization.

## Author

## Dailker
