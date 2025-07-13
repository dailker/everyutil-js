[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [validateReferer](../README.md) / validateReferer

# Function: validateReferer()

> **validateReferer**(`origin`, `whitelist`): `boolean`

Defined in: [validateReferer.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/security/validateReferer.ts#L9)

Validates referer/origin against a whitelist for CSRF protection.

## Parameters

### origin

`string`

The referer/origin header.

### whitelist

`string`[]

Allowed origins.

## Returns

`boolean`

True if valid.

## Author

## Dailker
