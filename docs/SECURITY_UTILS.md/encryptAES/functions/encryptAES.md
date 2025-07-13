[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [encryptAES](../README.md) / encryptAES

# Function: encryptAES()

> **encryptAES**(`data`, `key`): `string`

Defined in: [encryptAES.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/security/encryptAES.ts#L9)

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
