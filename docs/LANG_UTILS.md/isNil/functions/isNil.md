[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isNil](../README.md) / isNil

# Function: isNil()

> **isNil**(`value`): value is undefined \| null

Defined in: [isNil.ts:12](https://github.com/dailker/everyutil/blob/d9e75f2d42f154020cf237316fa0fc68ab45d114/src/lang/isNil.ts#L12)

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
