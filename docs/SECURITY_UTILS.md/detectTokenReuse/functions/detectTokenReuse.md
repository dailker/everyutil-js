[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [detectTokenReuse](../README.md) / detectTokenReuse

# Function: detectTokenReuse()

> **detectTokenReuse**(`jwt`, `historyCache`): `boolean`

Defined in: [detectTokenReuse.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/security/detectTokenReuse.ts#L9)

Prevents JWT replay attacks by tracking token IDs.

## Parameters

### jwt

`string`

The JWT token.

### historyCache

`Set`\<`string`\>

Set of used token IDs.

## Returns

`boolean`

True if token is reused, false otherwise.

## Author

## Dailker
