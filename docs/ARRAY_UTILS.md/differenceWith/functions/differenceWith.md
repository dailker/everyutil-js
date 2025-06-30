[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [differenceWith](../README.md) / differenceWith

# Function: differenceWith()

> **differenceWith**\<`T`\>(`arr`, `others`, `comparator`): `T`[]

Defined in: [differenceWith.ts:9](https://github.com/dailker/everyutil/blob/41b2b91e0d43fdbbea18f7ea0bcf4029dd413f41/src/array/differenceWith.ts#L9)

Returns the difference between arrays, using a comparator function.

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

The array to inspect.

### others

`T`[][]

The arrays to compare against.

### comparator

(`a`, `b`) => `boolean`

The comparator invoked per element.

## Returns

`T`[]

Elements in arr not present in others, compared by comparator.

## Author

dailker
