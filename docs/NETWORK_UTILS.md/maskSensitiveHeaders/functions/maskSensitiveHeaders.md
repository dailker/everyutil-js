[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [maskSensitiveHeaders](../README.md) / maskSensitiveHeaders

# Function: maskSensitiveHeaders()

> **maskSensitiveHeaders**(`headers`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [network/maskSensitiveHeaders.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/maskSensitiveHeaders.ts#L10)

Obfuscates sensitive headers (auth/cookie) in a headers object.

Example: maskSensitiveHeaders({ Authorization: 'Bearer ...' }) → { Authorization: '***' }

## Parameters

### headers

Headers object or plain object.

`Record`\<`string`, `string`\> | `Headers`

## Returns

`Record`\<`string`, `string`\> \| `Headers`

Masked headers.

## Author

## Dailker
