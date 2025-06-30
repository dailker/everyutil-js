[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isNil](../README.md) / isNil

# Function: isNil()

> **isNil**(`value`): value is undefined \| null

Defined in: [isNil.ts:12](https://github.com/dailker/everyutil/blob/0868190298b8cf2d6514015ce5723c81497e5681/src/lang/isNil.ts#L12)

Checks if value is null or undefined.

## Parameters

### value

`any`

The value to check.

## Returns

value is undefined \| null

True if the value is null or undefined, otherwise false.

## Author

dailker

## Example

```ts
isNil(null); // true
isNil(undefined); // true
isNil(0); // false
```
