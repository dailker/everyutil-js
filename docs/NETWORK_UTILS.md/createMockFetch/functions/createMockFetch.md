[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createMockFetch](../README.md) / createMockFetch

# Function: createMockFetch()

> **createMockFetch**(`responseMap`): (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: [network/createMockFetch.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/createMockFetch.ts#L10)

Creates a mock fetch implementation from a route-to-response mapping.

Example: const mock = createMockFetch({ '/api': { status: 200, body: 'ok' } })

## Parameters

### responseMap

`Record`\<`string`, \{ `body?`: `any`; `headers?`: `Record`\<`string`, `string`\>; `status?`: `number`; \}\>

Route to response mapping.

## Returns

Mock fetch function.

> (`input`, `init?`): `Promise`\<`Response`\>

### Parameters

#### input

`RequestInfo`

#### init?

`RequestInit`

### Returns

`Promise`\<`Response`\>

## Author

## Dailker
