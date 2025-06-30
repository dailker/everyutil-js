[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [webSocketMessageBuffer](../README.md) / webSocketMessageBuffer

# Function: webSocketMessageBuffer()

> **webSocketMessageBuffer**(`ws`, `bufferSize`): `string`[]

Defined in: [webSocketMessageBuffer.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/webSocketMessageBuffer.ts#L11)

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
