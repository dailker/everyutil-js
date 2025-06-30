[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [verifyHostAgainstCert](../README.md) / verifyHostAgainstCert

# Function: verifyHostAgainstCert()

> **verifyHostAgainstCert**(`host`, `cert`): `boolean`

Defined in: [network/verifyHostAgainstCert.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/verifyHostAgainstCert.ts#L9)

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
