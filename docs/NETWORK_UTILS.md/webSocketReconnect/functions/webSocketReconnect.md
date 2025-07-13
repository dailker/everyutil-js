[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [webSocketReconnect](../README.md) / webSocketReconnect

# Function: webSocketReconnect()

> **webSocketReconnect**(`url`, `options`): () => `WebSocket`

Defined in: [network/webSocketReconnect.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/webSocketReconnect.ts#L11)

Creates an auto-reconnecting WebSocket client.

Example: webSocketReconnect(url, { onMessage, maxRetries: 3 })

## Parameters

### url

`string`

The WebSocket URL.

### options

Handlers and options.

#### maxRetries?

`number`

#### onClose?

(`ev`) => `void`

#### onError?

(`ev`) => `void`

#### onMessage?

(`ev`) => `void`

#### onOpen?

(`ev`) => `void`

#### retryDelay?

`number`

## Returns

Function to get the current WebSocket instance.

> (): `WebSocket`

### Returns

`WebSocket`

## Author

## Dailker
