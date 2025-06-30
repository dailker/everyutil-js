[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [mapPassing](../README.md) / mapPassing

# Function: mapPassing()

> **mapPassing**\<`T`, `R`\>(`items`, `predicate`, `transform`): `R`[]

Defined in: [mapPassing.ts:9](https://github.com/dailker/everyutil/blob/d12555c550c1d59295f536d15822ff0e97aceecb/src/logic/mapPassing.ts#L9)

Applies transform only to passing items.

## Type Parameters

### T

`T`

### R

`R`

## Parameters

### items

`T`[]

The array of items to filter and transform.

### predicate

(`x`) => `boolean`

The predicate function to determine which items pass.

### transform

(`x`) => `R`

The transformation function to apply to passing items.

## Returns

`R`[]

The array of transformed items that passed the predicate.

## Author

## Dailker
