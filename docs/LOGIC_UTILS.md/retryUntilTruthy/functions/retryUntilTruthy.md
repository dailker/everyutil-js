[**LOGIC_UTILS**](../../README.md)

***

[LOGIC_UTILS](../../README.md) / [retryUntilTruthy](../README.md) / retryUntilTruthy

# Function: retryUntilTruthy()

> **retryUntilTruthy**(`fn`, `maxTries`, `delayMs`): `Promise`\<`boolean`\>

Defined in: [retryUntilTruthy.ts:5](https://github.com/dailker/everyutil/blob/54be0bab567ca8e189c5982902c59f3b7981d51d/src/logic/retryUntilTruthy.ts#L5)

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
