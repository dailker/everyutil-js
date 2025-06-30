[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isFunction](../README.md) / isFunction

# Function: isFunction()

> **isFunction**(`value`): `value is Function`

Defined in: [isFunction.ts:11](https://github.com/dailker/everyutil/blob/0868190298b8cf2d6514015ce5723c81497e5681/src/lang/isFunction.ts#L11)

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
