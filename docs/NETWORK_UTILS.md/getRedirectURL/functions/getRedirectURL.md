[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getRedirectURL](../README.md) / getRedirectURL

# Function: getRedirectURL()

> **getRedirectURL**(`response`): `null` \| `string`

Defined in: [network/getRedirectURL.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/getRedirectURL.ts#L10)

Extracts the redirect URL from a fetch/HTTP response if present.

Example: getRedirectURL(response) → "https://redirected.com" | null

## Parameters

### response

`Response`

The fetch Response object.

## Returns

`null` \| `string`

The redirect URL or null if not present.

## Author

## Dailker
