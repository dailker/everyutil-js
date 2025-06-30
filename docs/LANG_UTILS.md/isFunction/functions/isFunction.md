[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isFunction](../README.md) / isFunction

# Function: isFunction()

> **isFunction**(`value`): `value is Function`

Defined in: [isFunction.ts:11](https://github.com/dailker/everyutil/blob/41b2b91e0d43fdbbea18f7ea0bcf4029dd413f41/src/lang/isFunction.ts#L11)

Checks if value is a function.

## Parameters

### value

`any`

The value to check.

## Returns

`value is Function`

True if the value is a function, otherwise false.

## Author

dailker

## Example

```ts
isFunction(() => {}); // true
isFunction(123); // false
```
