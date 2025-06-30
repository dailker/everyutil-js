[**STATISTIC_UTILS**](../../README.md)

***

[STATISTIC_UTILS](../../README.md) / [jackknife](../README.md) / jackknife

# Function: jackknife()

> **jackknife**(`sample`, `statistic`): `number`[]

Defined in: [jackknife.ts:11](https://github.com/dailker/everyutil/blob/e265d7544f4e799da268d038a0a464c889a18367/src/statistic/jackknife.ts#L11)

Performs jackknife resampling.

Example: jackknife([1,2,3], arr => arr.reduce((a,b)=>a+b,0)/arr.length)

## Parameters

### sample

`number`[]

Original sample array.

### statistic

(`arr`) => `number`

Statistic function.

## Returns

`number`[]

Array of jackknife statistics.

## Author

## Dailker
