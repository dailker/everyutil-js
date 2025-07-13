[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [createEphemeralToken](../README.md) / isTokenExpired

# Function: isTokenExpired()

> **isTokenExpired**(`tokenCreatedAt`, `ttlMs`): `boolean`

Defined in: [createEphemeralToken.ts:25](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/security/createEphemeralToken.ts#L25)

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
