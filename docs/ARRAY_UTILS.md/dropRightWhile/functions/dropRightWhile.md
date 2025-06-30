[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [dropRightWhile](../README.md) / dropRightWhile

# Function: dropRightWhile()

> **dropRightWhile**\<`T`\>(`arr`, `predicate`): `T`[]

Defined in: [dropRightWhile.ts:8](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/array/dropRightWhile.ts#L8)

Creates a slice of array with n elements dropped from the end while predicate returns truthy.

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
