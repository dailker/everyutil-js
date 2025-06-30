[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryFetchWithBackoff](../README.md) / retryFetchWithBackoff

# Function: retryFetchWithBackoff()

> **retryFetchWithBackoff**(`fn`, `retries`, `baseDelay`, `factor`): `Promise`\<`any`\>

Defined in: [network/retryFetchWithBackoff.ts:13](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/retryFetchWithBackoff.ts#L13)

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
