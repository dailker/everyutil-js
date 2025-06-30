[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [sanitizeEmailURL](../README.md) / sanitizeEmailURL

# Function: sanitizeEmailURL()

> **sanitizeEmailURL**(`url`): `string`

Defined in: [network/sanitizeEmailURL.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/sanitizeEmailURL.ts#L10)

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
