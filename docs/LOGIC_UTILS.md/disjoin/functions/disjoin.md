[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [disjoin](../README.md) / disjoin

# Function: disjoin()

> **disjoin**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: [disjoin.ts:7](https://github.com/dailker/everyutil/blob/db1e809d4c097dd2ba5f952e07c115f09a518c6c/src/logic/disjoin.ts#L7)

Combines multiple predicates into one using logical OR.

## Type Parameters

### T

`T` *extends* `any`[]

## Parameters

### predicates

...(...`args`) => `boolean`[]

Array of predicate functions.

## Returns

A predicate that returns true if any predicate returns true.

> (...`args`): `boolean`

### Parameters

#### args

...`T`

### Returns

`boolean`

## Author

## Dailker
