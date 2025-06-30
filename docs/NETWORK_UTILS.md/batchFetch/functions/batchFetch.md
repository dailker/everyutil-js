[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [batchFetch](../README.md) / batchFetch

# Function: batchFetch()

> **batchFetch**(`urls`, `concurrency?`): `Promise`\<(`null` \| `Response`)[]\>

Defined in: [batchFetch.ts:11](https://github.com/dailker/everyutil/blob/54be0bab567ca8e189c5982902c59f3b7981d51d/src/network/batchFetch.ts#L11)

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
