[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [groupByPredicate](../README.md) / groupByPredicate

# Function: groupByPredicate()

> **groupByPredicate**\<`T`\>(`items`, `predicate`): `object`

Defined in: [groupByPredicate.ts:8](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/logic/groupByPredicate.ts#L8)

Returns { pass: T[], fail: T[] }.

## Type Parameters

### T

`T`

## Parameters

### items

`T`[]

The array of items to group.

### predicate

(`x`) => `boolean`

The predicate function to test each item.

## Returns

`object`

An object with arrays of passing and failing items.

### fail

> **fail**: `T`[]

### pass

> **pass**: `T`[]

## Author

## Dailker
