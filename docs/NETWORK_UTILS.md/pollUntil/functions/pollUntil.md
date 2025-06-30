[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [pollUntil](../README.md) / pollUntil

# Function: pollUntil()

> **pollUntil**(`url`, `conditionFn`, `interval`, `timeout`): `Promise`\<`any`\>

Defined in: [network/pollUntil.ts:13](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/pollUntil.ts#L13)

Polls an endpoint until a condition is met or timeout occurs.

Example: pollUntil(url, res => res.status === 'ready', 1000, 10000)

## Parameters

### url

`string`

The endpoint to poll.

### conditionFn

(`data`) => `boolean`

Condition function.

### interval

`number`

Poll interval in ms.

### timeout

`number`

Timeout in ms.

## Returns

`Promise`\<`any`\>

The response data if condition met.

## Author

## Dailker
