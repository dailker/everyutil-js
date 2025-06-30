[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [webSocketReconnect](../README.md) / webSocketReconnect

# Function: webSocketReconnect()

> **webSocketReconnect**(`url`, `options`): () => `WebSocket`

Defined in: [webSocketReconnect.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/webSocketReconnect.ts#L11)

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
