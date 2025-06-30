[**OBJECT_UTILS**](../../README.md)

***

[OBJECT_UTILS](../../README.md) / [has](../README.md) / has

# Function: has()

> **has**(`obj`, `path`): `boolean`

Defined in: [has.ts:11](https://github.com/dailker/everyutil/blob/0868190298b8cf2d6514015ce5723c81497e5681/src/object/has.ts#L11)

Checks if path exists in object.

## Parameters

### obj

`any`

The object to query.

### path

The path to check.

`string` | `string`[]

## Returns

`boolean`

True if the path exists, otherwise false.

## Author

dailker

## Example

```ts
has({ a: { b: 2 } }, 'a.b'); // true
```
