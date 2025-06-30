[**SECURITY_UTILS**](../../README.md)

***

[SECURITY_UTILS](../../README.md) / [isSafeJSONStructure](../README.md) / isSafeJSONStructure

# Function: isSafeJSONStructure()

> **isSafeJSONStructure**(`data`): `boolean`

Defined in: [isSafeJSONStructure.ts:8](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/security/isSafeJSONStructure.ts#L8)

Detects prototype pollution or circular structures in parsed JSON.

## Parameters

### data

`any`

The parsed JSON data.

## Returns

`boolean`

True if safe, false if polluted/circular.

## Author

## Dailker
