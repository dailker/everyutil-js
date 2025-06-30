[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createFakeServer](../README.md) / createFakeServer

# Function: createFakeServer()

> **createFakeServer**(`routes`): () => `void`

Defined in: [createFakeServer.ts:10](https://github.com/dailker/everyutil/blob/8ebd741383aff061deffff96bf58a9059d1b9944/src/network/createFakeServer.ts#L10)

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
