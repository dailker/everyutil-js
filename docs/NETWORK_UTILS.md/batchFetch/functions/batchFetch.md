[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [batchFetch](../README.md) / batchFetch

# Function: batchFetch()

> **batchFetch**(`urls`, `concurrency?`): `Promise`\<(`null` \| `Response`)[]\>

Defined in: [batchFetch.ts:11](https://github.com/dailker/everyutil/blob/d12555c550c1d59295f536d15822ff0e97aceecb/src/network/batchFetch.ts#L11)

Concurrently fetches multiple URLs with optional concurrency limit.

Example: batchFetch(["/a","/b"], 2)

## Parameters

### urls

`string`[]

Array of URLs to fetch.

### concurrency?

`number` = `5`

Max concurrent fetches.

## Returns

`Promise`\<(`null` \| `Response`)[]\>

Array of fetch responses or null for failed requests.

## Author

## Dailker
