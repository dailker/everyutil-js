[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryFetchWithBackoff](../README.md) / retryFetchWithBackoff

# Function: retryFetchWithBackoff()

> **retryFetchWithBackoff**(`fn`, `retries`, `baseDelay`, `factor`): `Promise`\<`any`\>

Defined in: [network/retryFetchWithBackoff.ts:13](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/retryFetchWithBackoff.ts#L13)

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
