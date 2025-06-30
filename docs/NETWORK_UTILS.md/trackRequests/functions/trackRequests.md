[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [trackRequests](../README.md) / trackRequests

# Function: trackRequests()

> **trackRequests**(`fn`): `Promise`\<`object`[]\>

Defined in: [trackRequests.ts:10](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/trackRequests.ts#L10)

Wraps fetch to collect all request data during a function call.

Example: trackRequests(async () => { ... }) → [{ input, init, response }]

## Parameters

### fn

() => `Promise`\<`any`\>

Function to run while tracking.

## Returns

`Promise`\<`object`[]\>

Array of tracked requests.

## Author

## Dailker
