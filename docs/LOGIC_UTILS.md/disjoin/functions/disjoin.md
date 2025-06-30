[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [disjoin](../README.md) / disjoin

# Function: disjoin()

> **disjoin**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: [disjoin.ts:7](https://github.com/dailker/everyutil/blob/b267f20aec6acc544994839192032069b76d5a4b/src/logic/disjoin.ts#L7)

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
