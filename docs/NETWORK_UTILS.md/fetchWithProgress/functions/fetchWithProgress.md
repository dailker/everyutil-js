[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithProgress](../README.md) / fetchWithProgress

# Function: fetchWithProgress()

> **fetchWithProgress**(`url`, `onProgress`): `Promise`\<`Blob`\>

Defined in: [fetchWithProgress.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/fetchWithProgress.ts#L11)

Fetches a resource and tracks download progress. Uses XHR for progress events.

Example: fetchWithProgress("/file", progress => ...)

## Parameters

### url

`string`

The URL to fetch.

### onProgress

(`progress`) => `void`

Progress callback (0-1).

## Returns

`Promise`\<`Blob`\>

The downloaded Blob.

## Author

## Dailker
