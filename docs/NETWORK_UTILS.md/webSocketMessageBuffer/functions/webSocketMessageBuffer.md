[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [webSocketMessageBuffer](../README.md) / webSocketMessageBuffer

# Function: webSocketMessageBuffer()

> **webSocketMessageBuffer**(`ws`, `bufferSize`): `string`[]

Defined in: [network/webSocketMessageBuffer.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/webSocketMessageBuffer.ts#L11)

Buffers the last N messages from a WebSocket.

Example: webSocketMessageBuffer(ws, 10)

## Parameters

### ws

`WebSocket`

The WebSocket instance.

### bufferSize

`number`

Number of messages to retain.

## Returns

`string`[]

The message buffer (most recent last).

## Author

## Dailker
