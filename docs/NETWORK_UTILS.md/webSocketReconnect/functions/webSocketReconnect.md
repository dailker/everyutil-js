[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [webSocketReconnect](../README.md) / webSocketReconnect

# Function: webSocketReconnect()

> **webSocketReconnect**(`url`, `options`): () => `WebSocket`

Defined in: [network/webSocketReconnect.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/webSocketReconnect.ts#L11)

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
