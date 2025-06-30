[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [resolveEmailService](../README.md) / resolveEmailService

# Function: resolveEmailService()

> **resolveEmailService**(`domain`): `null` \| `string`

Defined in: [network/resolveEmailService.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/resolveEmailService.ts#L10)

Maps an email domain to a common SMTP provider.

Example: resolveEmailService('gmail.com') → 'smtp.gmail.com'

## Parameters

### domain

`string`

Email domain.

## Returns

`null` \| `string`

SMTP host or null if unknown.

## Author

## Dailker
