[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryFetchWithBackoff](../README.md) / retryFetchWithBackoff

# Function: retryFetchWithBackoff()

> **retryFetchWithBackoff**(`fn`, `retries`, `baseDelay`, `factor`): `Promise`\<`any`\>

Defined in: [network/retryFetchWithBackoff.ts:13](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/retryFetchWithBackoff.ts#L13)

Retries a fetch-like function with exponential backoff.

Example: retryFetchWithBackoff(fn, 5, 100, 2)

## Parameters

### fn

() => `Promise`\<`any`\>

Fetch function.

### retries

`number`

Number of retries.

### baseDelay

`number` = `100`

Initial delay in ms.

### factor

`number` = `2`

Backoff multiplier.

## Returns

`Promise`\<`any`\>

The fetch result.

## Author

## Dailker
