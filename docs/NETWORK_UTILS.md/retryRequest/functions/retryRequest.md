[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryRequest](../README.md) / retryRequest

# Function: retryRequest()

> **retryRequest**(`url`, `options?`, `retries?`, `backoff?`): `Promise`\<`Response`\>

Defined in: [network/retryRequest.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/retryRequest.ts#L11)

Retries a fetch request X times with exponential backoff.

## Parameters

### url

`string`

The request URL.

### options?

`RequestInit`

Fetch options.

### retries?

`number` = `3`

Number of retries.

### backoff?

`number` = `300`

Initial backoff in ms.

## Returns

`Promise`\<`Response`\>

The fetch response.

## Author

## Dailker
