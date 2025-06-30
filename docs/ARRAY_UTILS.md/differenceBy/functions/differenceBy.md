[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [differenceBy](../README.md) / differenceBy

# Function: differenceBy()

> **differenceBy**\<`T`, `U`\>(`arr`, `others`, `iteratee`): `T`[]

Defined in: [differenceBy.ts:9](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/array/differenceBy.ts#L9)

Returns the difference between arrays, using an iteratee to compute comparison values.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### arr

`T`[]

The array to inspect.

### others

`T`[][]

The arrays to compare against.

### iteratee

(`item`) => `U`

The iteratee invoked per element.

## Returns

`T`[]

Elements in arr not present in others, compared by iteratee.

## Author

dailker
