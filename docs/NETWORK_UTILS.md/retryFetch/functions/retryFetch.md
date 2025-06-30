[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryFetch](../README.md) / retryFetch

# Function: retryFetch()

> **retryFetch**(`fn`, `retries`, `delay`): `Promise`\<`any`\>

Defined in: [network/retryFetch.ts:12](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/retryFetch.ts#L12)

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
