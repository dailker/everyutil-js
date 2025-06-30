[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithRetry](../README.md) / fetchWithRetry

# Function: fetchWithRetry()

> **fetchWithRetry**(`url`, `options`, `retryCount`): `Promise`\<`Response`\>

Defined in: [network/fetchWithRetry.ts:8](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/fetchWithRetry.ts#L8)

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
