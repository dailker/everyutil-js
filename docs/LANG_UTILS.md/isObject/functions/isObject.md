[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isObject](../README.md) / isObject

# Function: isObject()

> **isObject**(`value`): `value is object`

Defined in: [isObject.ts:11](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/lang/isObject.ts#L11)

Checks if value is an object (not null).

## Parameters

### value

`any`

The value to check.

## Returns

`value is object`

True if the value is an object and not null, otherwise false.

## Author

dailker

## Example

```ts
isObject({}); // true
isObject(null); // false
```
