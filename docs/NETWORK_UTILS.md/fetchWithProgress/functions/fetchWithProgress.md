[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithProgress](../README.md) / fetchWithProgress

# Function: fetchWithProgress()

> **fetchWithProgress**(`url`, `onProgress`): `Promise`\<`Blob`\>

Defined in: [network/fetchWithProgress.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/fetchWithProgress.ts#L11)

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
