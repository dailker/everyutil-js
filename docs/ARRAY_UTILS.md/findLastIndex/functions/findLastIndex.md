[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [findLastIndex](../README.md) / findLastIndex

# Function: findLastIndex()

> **findLastIndex**\<`T`\>(`arr`, `predicate`): `number`

Defined in: [findLastIndex.ts:8](https://github.com/dailker/everyutil/blob/41b2b91e0d43fdbbea18f7ea0bcf4029dd413f41/src/array/findLastIndex.ts#L8)

Returns the index of the last element predicate returns truthy for.

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

The array to search.

### predicate

(`value`, `index`, `array`) => `boolean`

The function invoked per iteration.

## Returns

`number`

The index of the found element, else -1.

## Author

dailker
