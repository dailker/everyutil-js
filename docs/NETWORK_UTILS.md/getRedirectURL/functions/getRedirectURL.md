[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getRedirectURL](../README.md) / getRedirectURL

# Function: getRedirectURL()

> **getRedirectURL**(`response`): `null` \| `string`

Defined in: [getRedirectURL.ts:10](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/getRedirectURL.ts#L10)

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
