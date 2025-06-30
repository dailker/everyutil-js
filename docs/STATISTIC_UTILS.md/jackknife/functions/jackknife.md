[**STATISTIC_UTILS**](../../README.md)

***

[STATISTIC_UTILS](../../README.md) / [jackknife](../README.md) / jackknife

# Function: jackknife()

> **jackknife**(`sample`, `statistic`): `number`[]

Defined in: [jackknife.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/statistic/jackknife.ts#L11)

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
