[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [stripSensitiveHeaders](../README.md) / stripSensitiveHeaders

# Function: stripSensitiveHeaders()

> **stripSensitiveHeaders**(`headers`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [stripSensitiveHeaders.ts:10](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/stripSensitiveHeaders.ts#L10)

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
