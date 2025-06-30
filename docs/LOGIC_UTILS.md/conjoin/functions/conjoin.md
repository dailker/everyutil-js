[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [conjoin](../README.md) / conjoin

# Function: conjoin()

> **conjoin**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: [conjoin.ts:7](https://github.com/dailker/everyutil/blob/d99125d64df5681bba8d2a0f0d24c32625cbf289/src/logic/conjoin.ts#L7)

Combines multiple predicates into one using logical AND.

## Type Parameters

### T

`T` *extends* `any`[]

## Parameters

### predicates

...(...`args`) => `boolean`[]

Array of predicate functions.

## Returns

A predicate that returns true if all predicates return true.

> (...`args`): `boolean`

### Parameters

#### args

...`T`

### Returns

`boolean`

## Author

## Dailker
