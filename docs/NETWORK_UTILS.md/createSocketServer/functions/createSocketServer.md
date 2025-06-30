[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createSocketServer](../README.md) / createSocketServer

# Function: createSocketServer()

> **createSocketServer**(`options`): `Promise`\<`any`\>

Defined in: [network/createSocketServer.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/createSocketServer.ts#L10)

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
