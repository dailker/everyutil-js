[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createFakeServer](../README.md) / createFakeServer

# Function: createFakeServer()

> **createFakeServer**(`routes`): () => `void`

Defined in: [createFakeServer.ts:10](https://github.com/dailker/everyutil/blob/e265d7544f4e799da268d038a0a464c889a18367/src/network/createFakeServer.ts#L10)

Creates a lightweight local mock server with route responses (browser only, Service Worker style).

Example: createFakeServer({ '/api': { status: 200, body: 'ok' } })

## Parameters

### routes

`Record`\<`string`, \{ `body?`: `any`; `headers?`: `Record`\<`string`, `string`\>; `status?`: `number`; \}\>

Route to response mapping.

## Returns

Function to unregister the fake server.

> (): `void`

### Returns

`void`

## Author

## Dailker
