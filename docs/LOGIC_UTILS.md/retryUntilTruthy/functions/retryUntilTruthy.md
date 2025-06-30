[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [retryUntilTruthy](../README.md) / retryUntilTruthy

# Function: retryUntilTruthy()

> **retryUntilTruthy**(`fn`, `maxTries`, `delayMs`): `Promise`\<`boolean`\>

Defined in: [retryUntilTruthy.ts:5](https://github.com/dailker/everyutil/blob/8aea75a123d1c8f9816646c45d1769cd1efa4eac/src/logic/retryUntilTruthy.ts#L5)

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
