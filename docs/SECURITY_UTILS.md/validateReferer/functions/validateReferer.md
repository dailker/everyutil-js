[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [validateReferer](../README.md) / validateReferer

# Function: validateReferer()

> **validateReferer**(`origin`, `whitelist`): `boolean`

Defined in: [validateReferer.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/security/validateReferer.ts#L9)

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
