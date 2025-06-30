[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isArray](../README.md) / isArray

# Function: isArray()

> **isArray**(`value`): `value is any[]`

Defined in: [isArray.ts:11](https://github.com/dailker/everyutil/blob/d9e75f2d42f154020cf237316fa0fc68ab45d114/src/lang/isArray.ts#L11)

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
