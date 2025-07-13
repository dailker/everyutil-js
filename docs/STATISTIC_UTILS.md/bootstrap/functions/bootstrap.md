[**STATISTIC_UTILS**](../../README.md)

***

[STATISTIC_UTILS](../../README.md) / [bootstrap](../README.md) / bootstrap

# Function: bootstrap()

> **bootstrap**(`sample`, `statistic`, `iterations`): `number`[]

Defined in: [bootstrap.ts:12](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/statistic/bootstrap.ts#L12)

Performs bootstrap resampling for confidence intervals.

Example: bootstrap([1,2,3], arr => arr.reduce((a,b)=>a+b,0)/arr.length, 1000)

## Parameters

### sample

`number`[]

Original sample array.

### statistic

(`arr`) => `number`

Statistic function.

### iterations

`number`

Number of resamples.

## Returns

`number`[]

Array of bootstrap statistics.

## Author

## Dailker
