[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [createEphemeralToken](../README.md) / isTokenExpired

# Function: isTokenExpired()

> **isTokenExpired**(`tokenCreatedAt`, `ttlMs`): `boolean`

Defined in: [createEphemeralToken.ts:25](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/security/createEphemeralToken.ts#L25)

Checks if a token is expired based on creation time and TTL.

## Parameters

### tokenCreatedAt

`number`

Token creation timestamp (ms).

### ttlMs

`number`

Time-to-live in ms.

## Returns

`boolean`

True if expired.

## Author

## Dailker
