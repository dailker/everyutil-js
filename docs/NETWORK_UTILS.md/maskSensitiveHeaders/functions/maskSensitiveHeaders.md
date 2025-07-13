[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [maskSensitiveHeaders](../README.md) / maskSensitiveHeaders

# Function: maskSensitiveHeaders()

> **maskSensitiveHeaders**(`headers`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [network/maskSensitiveHeaders.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/maskSensitiveHeaders.ts#L10)

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
