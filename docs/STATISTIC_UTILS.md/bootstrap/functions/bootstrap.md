[**STATISTIC_UTILS**](../../README.md)

***

[STATISTIC_UTILS](../../README.md) / [bootstrap](../README.md) / bootstrap

# Function: bootstrap()

> **bootstrap**(`sample`, `statistic`, `iterations`): `number`[]

Defined in: [bootstrap.ts:12](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/statistic/bootstrap.ts#L12)

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
