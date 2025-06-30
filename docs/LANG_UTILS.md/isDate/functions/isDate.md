[**LANG_UTILS**](../../README.md)

***

[LANG_UTILS](../../README.md) / [isDate](../README.md) / isDate

# Function: isDate()

> **isDate**(`value`): `value is Date`

Defined in: [isDate.ts:11](https://github.com/dailker/everyutil/blob/669c80948347059212c7a0ef09fd720ca9b1c411/src/lang/isDate.ts#L11)

Checks if value is a Date object.

## Parameters

### value

`any`

The value to check.

## Returns

`value is Date`

True if the value is a Date object, otherwise false.

## Author

dailker

## Example

```ts
isDate(new Date()); // true
isDate('2020-01-01'); // false
```
