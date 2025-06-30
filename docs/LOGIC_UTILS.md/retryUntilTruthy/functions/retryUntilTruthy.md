[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [retryUntilTruthy](../README.md) / retryUntilTruthy

# Function: retryUntilTruthy()

> **retryUntilTruthy**(`fn`, `maxTries`, `delayMs`): `Promise`\<`boolean`\>

Defined in: [retryUntilTruthy.ts:5](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/logic/retryUntilTruthy.ts#L5)

Retry a logical function until it returns true or maxes out.

## Parameters

### fn

() => `boolean` \| `Promise`\<`boolean`\>

### maxTries

`number` = `3`

### delayMs

`number` = `0`

## Returns

`Promise`\<`boolean`\>

## Author

## Dailker
