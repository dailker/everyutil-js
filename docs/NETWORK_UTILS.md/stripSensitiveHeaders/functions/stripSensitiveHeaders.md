[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [stripSensitiveHeaders](../README.md) / stripSensitiveHeaders

# Function: stripSensitiveHeaders()

> **stripSensitiveHeaders**(`headers`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [network/stripSensitiveHeaders.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/stripSensitiveHeaders.ts#L10)

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
