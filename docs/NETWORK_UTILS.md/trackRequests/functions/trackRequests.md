[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [trackRequests](../README.md) / trackRequests

# Function: trackRequests()

> **trackRequests**(`fn`): `Promise`\<`object`[]\>

Defined in: [trackRequests.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/trackRequests.ts#L10)

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
