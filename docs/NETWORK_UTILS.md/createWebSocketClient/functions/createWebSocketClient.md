[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createWebSocketClient](../README.md) / createWebSocketClient

# Function: createWebSocketClient()

> **createWebSocketClient**(`url`, `handlers`): `WebSocket`

Defined in: [network/createWebSocketClient.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/createWebSocketClient.ts#L11)

Creates a quick WebSocket client wrapper with event handlers.

Example: createWebSocketClient(url, { onOpen, onMessage })

## Parameters

### url

`string`

The WebSocket URL.

### handlers

Event handlers.

#### onClose?

(`ev`) => `void`

#### onError?

(`ev`) => `void`

#### onMessage?

(`ev`) => `void`

#### onOpen?

(`ev`) => `void`

## Returns

`WebSocket`

The WebSocket instance.

## Author

## Dailker
