[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchUtils](../README.md) / fetchWithRetry

# Function: fetchWithRetry()

> **fetchWithRetry**(`url`, `options?`, `retryCount?`): `Promise`\<`Response`\>

Defined in: [fetchUtils.ts:10](https://github.com/dailker/everyutil/blob/9768d00ced16ec8f4705df34c2fe47f2b1b47121/src/network/fetchUtils.ts#L10)

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
