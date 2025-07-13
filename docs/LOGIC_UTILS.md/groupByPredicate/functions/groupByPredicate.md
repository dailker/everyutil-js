[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [groupByPredicate](../README.md) / groupByPredicate

# Function: groupByPredicate()

> **groupByPredicate**\<`T`\>(`items`, `predicate`): `object`

Defined in: [groupByPredicate.ts:8](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/logic/groupByPredicate.ts#L8)

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
