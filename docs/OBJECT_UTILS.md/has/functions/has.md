[**OBJECT_UTILS**](../../README.md)

***

[OBJECT_UTILS](../../README.md) / [has](../README.md) / has

# Function: has()

> **has**(`obj`, `path`): `boolean`

Defined in: [has.ts:11](https://github.com/dailker/everyutil/blob/41b2b91e0d43fdbbea18f7ea0bcf4029dd413f41/src/object/has.ts#L11)

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
