[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [flattenUntil](../README.md) / flattenUntil

# Function: flattenUntil()

> **flattenUntil**\<`T`\>(`array`, `depthFn`, `depth?`): `T`[]

Defined in: [flattenUntil.ts:10](https://github.com/dailker/everyutil/blob/9f9d77d7401f21657d579473c8868c96f7b4bad7/src/array/flattenUntil.ts#L10)

Flattens an array until the provided depth function returns false for an element.

## Type Parameters

### T

`T`

## Parameters

### array

`any`[]

The input array.

### depthFn

(`item`, `depth`) => `boolean`

Function to determine if an item should be further flattened.

### depth?

`number` = `0`

Current depth (for recursion).

## Returns

`T`[]

- Flattened array.

## Author

## Dailker
