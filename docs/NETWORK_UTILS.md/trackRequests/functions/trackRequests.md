[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [trackRequests](../README.md) / trackRequests

# Function: trackRequests()

> **trackRequests**(`fn`): `Promise`\<`object`[]\>

Defined in: [network/trackRequests.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/trackRequests.ts#L10)

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
