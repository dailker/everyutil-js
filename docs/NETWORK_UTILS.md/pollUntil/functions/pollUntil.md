[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [pollUntil](../README.md) / pollUntil

# Function: pollUntil()

> **pollUntil**(`url`, `conditionFn`, `interval`, `timeout`): `Promise`\<`any`\>

Defined in: [pollUntil.ts:13](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/pollUntil.ts#L13)

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
