[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [conjoin](../README.md) / conjoin

# Function: conjoin()

> **conjoin**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: [conjoin.ts:7](https://github.com/dailker/everyutil/blob/0531b9744e97cf76b2fb0fb9c6a72c61ec9e2b23/src/logic/conjoin.ts#L7)

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
