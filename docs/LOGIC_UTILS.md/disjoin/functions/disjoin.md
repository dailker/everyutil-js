[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [disjoin](../README.md) / disjoin

# Function: disjoin()

> **disjoin**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: [disjoin.ts:7](https://github.com/dailker/everyutil/blob/9ec04d41a381dab61073bf86e9abc70eaf55066d/src/logic/disjoin.ts#L7)

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
