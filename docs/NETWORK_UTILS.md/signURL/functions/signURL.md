[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [signURL](../README.md) / signURL

# Function: signURL()

> **signURL**(`url`, `secret`): `Promise`\<`string`\>

Defined in: [network/signURL.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/signURL.ts#L11)

Appends an HMAC signature to a URL as a query parameter.

Example: signURL(url, secret) → url?t=...&sig=...

## Parameters

### url

`string`

The URL to sign.

### secret

`string`

The secret key.

## Returns

`Promise`\<`string`\>

The signed URL.

## Author

## Dailker
