[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [dropWhile](../README.md) / dropWhile

# Function: dropWhile()

> **dropWhile**\<`T`\>(`arr`, `predicate`): `T`[]

Defined in: [dropWhile.ts:8](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/array/dropWhile.ts#L8)

Creates a slice of array with elements dropped from the beginning while predicate returns truthy.

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

The array to query.

### predicate

(`value`, `index`, `array`) => `boolean`

The function invoked per iteration.

## Returns

`T`[]

The slice of array.

## Author

dailker
