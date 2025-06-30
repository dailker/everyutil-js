[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [pollUntil](../README.md) / pollUntil

# Function: pollUntil()

> **pollUntil**(`url`, `conditionFn`, `interval`, `timeout`): `Promise`\<`any`\>

Defined in: [pollUntil.ts:13](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/pollUntil.ts#L13)

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
