[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithProgress](../README.md) / fetchWithProgress

# Function: fetchWithProgress()

> **fetchWithProgress**(`url`, `onProgress`): `Promise`\<`Blob`\>

Defined in: [fetchWithProgress.ts:11](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/fetchWithProgress.ts#L11)

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
