[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [maskSensitiveHeaders](../README.md) / maskSensitiveHeaders

# Function: maskSensitiveHeaders()

> **maskSensitiveHeaders**(`headers`): `Record`\<`string`, `string`\> \| `Headers`

Defined in: [maskSensitiveHeaders.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/maskSensitiveHeaders.ts#L10)

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
