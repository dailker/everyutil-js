[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchUtils](../README.md) / fetchWithRetry

# Function: fetchWithRetry()

> **fetchWithRetry**(`url`, `options?`, `retryCount?`): `Promise`\<`Response`\>

Defined in: [fetchUtils.ts:10](https://github.com/dailker/everyutil/blob/0ec5ce08552e5059ec58e2975404aeb74a6202b1/src/network/fetchUtils.ts#L10)

Fetch wrapper that retries on failure.

## Parameters

### url

`string`

The URL to fetch.

### options?

`RequestInit`

Fetch options.

### retryCount?

`number` = `3`

Number of retries.

## Returns

`Promise`\<`Response`\>

Fetch response.

## Author

## Dailker
