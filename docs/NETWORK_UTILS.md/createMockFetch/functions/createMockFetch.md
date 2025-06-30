[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createMockFetch](../README.md) / createMockFetch

# Function: createMockFetch()

> **createMockFetch**(`responseMap`): (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: [createMockFetch.ts:10](https://github.com/dailker/everyutil/blob/e265d7544f4e799da268d038a0a464c889a18367/src/network/createMockFetch.ts#L10)

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
