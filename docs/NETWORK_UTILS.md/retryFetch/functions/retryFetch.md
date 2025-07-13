[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryFetch](../README.md) / retryFetch

# Function: retryFetch()

> **retryFetch**(`fn`, `retries`, `delay`): `Promise`\<`any`\>

Defined in: [network/retryFetch.ts:12](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/retryFetch.ts#L12)

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
