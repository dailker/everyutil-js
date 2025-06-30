[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [disjoin](../README.md) / disjoin

# Function: disjoin()

> **disjoin**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: [disjoin.ts:7](https://github.com/dailker/everyutil/blob/9768d00ced16ec8f4705df34c2fe47f2b1b47121/src/logic/disjoin.ts#L7)

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
