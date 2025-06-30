[**OBJECT_UTILS**](../../README.md)

***

[OBJECT_UTILS](../../README.md) / [omit](../README.md) / omit

# Function: omit()

> **omit**\<`T`, `K`\>(`obj`, `keys`): `Omit`\<`T`, `K`\>

Defined in: [omit.ts:11](https://github.com/dailker/everyutil/blob/d9e75f2d42f154020cf237316fa0fc68ab45d114/src/object/omit.ts#L11)

Returns a new object omitting the provided keys.

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

The keys to omit from the object.

## Returns

`Omit`\<`T`, `K`\>

A new object without the specified keys.

## Author

dailker

## Example

```ts
omit({ a: 1, b: 2 }, ['a']); // { b: 2 }
```
