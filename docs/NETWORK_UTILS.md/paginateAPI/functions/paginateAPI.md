[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [paginateAPI](../README.md) / paginateAPI

# Function: paginateAPI()

> **paginateAPI**(`fetchPageFn`): `Promise`\<`any`[]\>

Defined in: [paginateAPI.ts:10](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/paginateAPI.ts#L10)

Handles paginated REST APIs by repeatedly calling fetchPageFn.

Example: paginateAPI(fetchPageFn) → [all results]

## Parameters

### fetchPageFn

(`page`) => `Promise`\<\{ `data`: `any`[]; `nextPage?`: `null` \| `number`; \}\>

Function to fetch a page.

## Returns

`Promise`\<`any`[]\>

All results combined.

## Author

## Dailker
