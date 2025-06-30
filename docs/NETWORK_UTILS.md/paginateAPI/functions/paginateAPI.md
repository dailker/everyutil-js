[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [paginateAPI](../README.md) / paginateAPI

# Function: paginateAPI()

> **paginateAPI**(`fetchPageFn`): `Promise`\<`any`[]\>

Defined in: [paginateAPI.ts:10](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/paginateAPI.ts#L10)

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
