[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [enforcePasswordPolicy](../README.md) / enforcePasswordPolicy

# Function: enforcePasswordPolicy()

> **enforcePasswordPolicy**(`password`, `options`): `boolean`

Defined in: [enforcePasswordPolicy.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/security/enforcePasswordPolicy.ts#L9)

Enforces password policy (length, entropy, blacklist, etc).

## Parameters

### password

`string`

The password to check.

### options

Policy options (minLength, blacklist, etc).

#### blacklist?

`string`[]

#### minLength?

`number`

#### requireDigit?

`boolean`

#### requireLower?

`boolean`

#### requireSpecial?

`boolean`

#### requireUpper?

`boolean`

## Returns

`boolean`

True if password passes policy.

## Author

## Dailker
