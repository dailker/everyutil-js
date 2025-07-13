[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithRetry](../README.md) / fetchWithRetry

# Function: fetchWithRetry()

> **fetchWithRetry**(`url`, `options`, `retryCount`): `Promise`\<`Response`\>

Defined in: [network/fetchWithRetry.ts:8](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/fetchWithRetry.ts#L8)

Fetch wrapper that retries on failure.

## Parameters

### url

`string`

The URL to fetch.

### options

`RequestInit` = `{}`

Fetch options.

### retryCount

`number` = `3`

Number of retries.

## Returns

`Promise`\<`Response`\>

The fetch response.
