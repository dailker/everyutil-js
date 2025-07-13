[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [retryRequest](../README.md) / retryRequest

# Function: retryRequest()

> **retryRequest**(`url`, `options?`, `retries?`, `backoff?`): `Promise`\<`Response`\>

Defined in: [network/retryRequest.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/retryRequest.ts#L11)

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
