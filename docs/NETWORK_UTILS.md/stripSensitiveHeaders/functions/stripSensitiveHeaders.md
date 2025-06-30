[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [stripSensitiveHeaders](../README.md) / stripSensitiveHeaders

# Function: stripSensitiveHeaders()

> **stripSensitiveHeaders**(`headers`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [stripSensitiveHeaders.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/stripSensitiveHeaders.ts#L10)

Removes sensitive headers (cookies, auth) from outgoing headers.

Example: stripSensitiveHeaders(headers) → { ... }

## Parameters

### headers

Headers object or plain object.

`Record`\<`string`, `string`\> | `Headers`

## Returns

`Record`\<`string`, `string`\> \| `Headers`

Cleaned headers.

## Author

## Dailker
