[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithRetry](../README.md) / fetchWithRetry

# Function: fetchWithRetry()

> **fetchWithRetry**(`url`, `options`, `retryCount`): `Promise`\<`Response`\>

Defined in: [fetchWithRetry.ts:8](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/fetchWithRetry.ts#L8)

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
