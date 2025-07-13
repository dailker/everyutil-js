[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [verifyHostAgainstCert](../README.md) / verifyHostAgainstCert

# Function: verifyHostAgainstCert()

> **verifyHostAgainstCert**(`host`, `cert`): `boolean`

Defined in: [network/verifyHostAgainstCert.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/verifyHostAgainstCert.ts#L9)

Validates a host against the CN/SAN of an SSL certificate (Node.js only).

## Parameters

### host

`string`

The hostname to verify.

### cert

`any`

The certificate object.

## Returns

`boolean`

True if host matches cert, false otherwise.

## Author

## Dailker
