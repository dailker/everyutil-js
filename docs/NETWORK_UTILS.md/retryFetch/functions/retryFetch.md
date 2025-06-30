[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryFetch](../README.md) / retryFetch

# Function: retryFetch()

> **retryFetch**(`fn`, `retries`, `delay`): `Promise`\<`any`\>

Defined in: [retryFetch.ts:12](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/retryFetch.ts#L12)

Retries a fetch-like function with delay between attempts.

Example: retryFetch(() => fetch(url), 3, 1000)

## Parameters

### fn

() => `Promise`\<`any`\>

Fetch function.

### retries

`number`

Number of retries.

### delay

`number`

Delay in ms between retries.

## Returns

`Promise`\<`any`\>

The fetch result.

## Author

## Dailker
