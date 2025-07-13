[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [stripSensitiveHeaders](../README.md) / stripSensitiveHeaders

# Function: stripSensitiveHeaders()

> **stripSensitiveHeaders**(`headers`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [network/stripSensitiveHeaders.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/stripSensitiveHeaders.ts#L10)

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
