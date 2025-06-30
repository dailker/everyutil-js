[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getRedirectURL](../README.md) / getRedirectURL

# Function: getRedirectURL()

> **getRedirectURL**(`response`): `null` \| `string`

Defined in: [getRedirectURL.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/getRedirectURL.ts#L10)

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
