[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [verifySignature](../README.md) / verifySignature

# Function: verifySignature()

> **verifySignature**(`data`, `signature`, `publicKey`): `boolean`

Defined in: [verifySignature.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/security/verifySignature.ts#L10)

Verifies a digital signature using a public RSA key (SHA256).

## Parameters

### data

`string`

The data that was signed.

### signature

`string`

The base64-encoded signature.

### publicKey

`string`

The public key (PEM format).

## Returns

`boolean`

True if valid, false otherwise.

## Author

## Dailker
