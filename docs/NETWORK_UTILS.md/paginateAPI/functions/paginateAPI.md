[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [paginateAPI](../README.md) / paginateAPI

# Function: paginateAPI()

> **paginateAPI**(`fetchPageFn`): `Promise`\<`any`[]\>

Defined in: [network/paginateAPI.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/paginateAPI.ts#L10)

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
