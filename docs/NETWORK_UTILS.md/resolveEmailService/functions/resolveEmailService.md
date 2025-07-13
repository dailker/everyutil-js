[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [resolveEmailService](../README.md) / resolveEmailService

# Function: resolveEmailService()

> **resolveEmailService**(`domain`): `null` \| `string`

Defined in: [network/resolveEmailService.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/resolveEmailService.ts#L10)

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
