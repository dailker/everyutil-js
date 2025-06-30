[**STATISTIC_UTILS**](../../README.md)

***

[STATISTIC_UTILS](../../README.md) / [jackknife](../README.md) / jackknife

# Function: jackknife()

> **jackknife**(`sample`, `statistic`): `number`[]

Defined in: [jackknife.ts:11](https://github.com/dailker/everyutil/blob/9ec04d41a381dab61073bf86e9abc70eaf55066d/src/statistic/jackknife.ts#L11)

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
