[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [paginateAPI](../README.md) / paginateAPI

# Function: paginateAPI()

> **paginateAPI**(`fetchPageFn`): `Promise`\<`any`[]\>

Defined in: [network/paginateAPI.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/paginateAPI.ts#L10)

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
