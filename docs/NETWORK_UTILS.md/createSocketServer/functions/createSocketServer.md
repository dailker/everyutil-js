[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createSocketServer](../README.md) / createSocketServer

# Function: createSocketServer()

> **createSocketServer**(`options`): `Promise`\<`any`\>

Defined in: [network/createSocketServer.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/createSocketServer.ts#L10)

Bootstraps a TCP server with event handlers (Node.js only).

Example: createSocketServer({ port, onConnection })

## Parameters

### options

Server options and handlers.

#### onConnection?

(`socket`) => `void`

#### onError?

(...`args`) => `void`

#### port

`number`

## Returns

`Promise`\<`any`\>

The server instance.

## Author

## Dailker
