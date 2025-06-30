[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [trackRequests](../README.md) / trackRequests

# Function: trackRequests()

> **trackRequests**(`fn`): `Promise`\<`object`[]\>

Defined in: [network/trackRequests.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/trackRequests.ts#L10)

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
