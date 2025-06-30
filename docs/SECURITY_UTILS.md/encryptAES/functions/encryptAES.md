[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [encryptAES](../README.md) / encryptAES

# Function: encryptAES()

> **encryptAES**(`data`, `key`): `string`

Defined in: [encryptAES.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/security/encryptAES.ts#L9)

Encrypts data using AES-256-CBC.

## Parameters

### data

`string`

The plaintext data.

### key

`string`

The encryption key (32 bytes for AES-256).

## Returns

`string`

The base64-encoded ciphertext (IV + encrypted data).

## Author

## Dailker
