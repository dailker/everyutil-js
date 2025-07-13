[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [sanitizeEmailURL](../README.md) / sanitizeEmailURL

# Function: sanitizeEmailURL()

> **sanitizeEmailURL**(`url`): `string`

Defined in: [network/sanitizeEmailURL.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/sanitizeEmailURL.ts#L10)

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
