[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isArray](../README.md) / isArray

# Function: isArray()

> **isArray**(`value`): `value is any[]`

Defined in: [isArray.ts:11](https://github.com/dailker/everyutil/blob/669c80948347059212c7a0ef09fd720ca9b1c411/src/lang/isArray.ts#L11)

Checks if value is an array.

## Parameters

### value

`any`

The value to check.

## Returns

`value is any[]`

True if the value is an array, otherwise false.

## Author

dailker

## Example

```ts
isArray([1, 2, 3]); // true
isArray('abc'); // false
```
