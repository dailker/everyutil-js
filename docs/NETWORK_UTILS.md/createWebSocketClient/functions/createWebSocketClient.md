[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [createWebSocketClient](../README.md) / createWebSocketClient

# Function: createWebSocketClient()

> **createWebSocketClient**(`url`, `handlers`): `WebSocket`

Defined in: [createWebSocketClient.ts:11](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/createWebSocketClient.ts#L11)

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
