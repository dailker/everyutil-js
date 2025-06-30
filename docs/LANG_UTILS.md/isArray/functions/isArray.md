[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isArray](../README.md) / isArray

# Function: isArray()

> **isArray**(`value`): `value is any[]`

Defined in: [isArray.ts:11](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/lang/isArray.ts#L11)

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
