[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [sanitizeEmailURL](../README.md) / sanitizeEmailURL

# Function: sanitizeEmailURL()

> **sanitizeEmailURL**(`url`): `string`

Defined in: [network/sanitizeEmailURL.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/sanitizeEmailURL.ts#L10)

Strips credentials or masks sensitive data in an email URL.

Example: sanitizeEmailURL('smtp://user:pass@host:25') → 'smtp://***:***@host:25'

## Parameters

### url

`string`

The email URL.

## Returns

`string`

The sanitized URL.

## Author

## Dailker
