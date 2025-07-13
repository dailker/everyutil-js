[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [enforcePasswordPolicy](../README.md) / enforcePasswordPolicy

# Function: enforcePasswordPolicy()

> **enforcePasswordPolicy**(`password`, `options`): `boolean`

Defined in: [enforcePasswordPolicy.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/security/enforcePasswordPolicy.ts#L9)

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
