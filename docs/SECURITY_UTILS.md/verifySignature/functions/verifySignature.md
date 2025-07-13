[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [verifySignature](../README.md) / verifySignature

# Function: verifySignature()

> **verifySignature**(`data`, `signature`, `publicKey`): `boolean`

Defined in: [verifySignature.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/security/verifySignature.ts#L10)

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
