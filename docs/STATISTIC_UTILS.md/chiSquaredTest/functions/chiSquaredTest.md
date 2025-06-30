[**STATISTIC_UTILS**](../../README.md)

***

[STATISTIC_UTILS](../../README.md) / [chiSquaredTest](../README.md) / chiSquaredTest

# Function: chiSquaredTest()

> **chiSquaredTest**(`observed`, `expected`): `object`

Defined in: [chiSquaredTest.ts:11](https://github.com/dailker/everyutil/blob/2c6c8c707de5d4a5d228d272d2d21855929838e2/src/statistic/chiSquaredTest.ts#L11)

Performs a chi-square goodness of fit test.

Example: chiSquaredTest([10, 20], [15, 15]) → { chi2: 1.666, p: 0.197 }

## Parameters

### observed

`number`[]

Observed frequencies.

### expected

`number`[]

Expected frequencies.

## Returns

`object`

Chi-square statistic and p-value.

### chi2

> **chi2**: `number`

### p

> **p**: `number`

## Author

## Dailker
