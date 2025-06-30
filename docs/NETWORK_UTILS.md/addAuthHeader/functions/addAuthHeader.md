[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [addAuthHeader](../README.md) / addAuthHeader

# Function: addAuthHeader()

> **addAuthHeader**(`headers`, `token`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [network/addAuthHeader.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/addAuthHeader.ts#L11)

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
