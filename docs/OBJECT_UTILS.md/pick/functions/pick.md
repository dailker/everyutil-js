[**OBJECT_UTILS**](../../README.md)

***

[OBJECT_UTILS](../../README.md) / [pick](../README.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `Pick`\<`T`, `K`\>

Defined in: [pick.ts:11](https://github.com/dailker/everyutil/blob/41b2b91e0d43fdbbea18f7ea0bcf4029dd413f41/src/object/pick.ts#L11)

Returns a new object with only the provided keys.

## Type Parameters

### T

`T` *extends* `object`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

The source object.

### keys

`K`[]

The keys to pick from the object.

## Returns

`Pick`\<`T`, `K`\>

A new object with only the specified keys.

## Author

dailker

## Example

```ts
pick({ a: 1, b: 2 }, ['a']); // { a: 1 }
```
