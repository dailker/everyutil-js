[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [signURL](../README.md) / signURL

# Function: signURL()

> **signURL**(`url`, `secret`): `Promise`\<`string`\>

Defined in: [signURL.ts:11](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/signURL.ts#L11)

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
