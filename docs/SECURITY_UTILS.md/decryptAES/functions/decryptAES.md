[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [decryptAES](../README.md) / decryptAES

# Function: decryptAES()

> **decryptAES**(`cipherText`, `key`): `string`

Defined in: [decryptAES.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/security/decryptAES.ts#L9)

Decrypts AES-256-CBC encrypted data.

## Parameters

### cipherText

`string`

The base64-encoded ciphertext (IV + encrypted data).

### key

`string`

The encryption key (32 bytes for AES-256).

## Returns

`string`

The decrypted plaintext.

## Author

## Dailker
