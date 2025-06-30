[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isNumber](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [isNumber.ts:11](https://github.com/dailker/everyutil/blob/d9e75f2d42f154020cf237316fa0fc68ab45d114/src/lang/isNumber.ts#L11)

Checks if value is a number (not NaN).

## Parameters

### value

`any`

The value to check.

## Returns

`value is number`

True if the value is a number and not NaN, otherwise false.

## Author

dailker

## Example

```ts
isNumber(123); // true
isNumber(NaN); // false
```
