[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [setupDataChannel](../README.md) / setupDataChannel

# Function: setupDataChannel()

> **setupDataChannel**(`pc`, `label`, `handlers`): `RTCDataChannel`

Defined in: [network/setupDataChannel.ts:12](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/setupDataChannel.ts#L12)

Sets up a RTCDataChannel with events and config.

Example: setupDataChannel(pc, 'chat', { onMessage })

## Parameters

### pc

`RTCPeerConnection`

The peer connection.

### label

`string`

Channel label.

### handlers

Event handlers and options.

#### onClose?

(`ev`) => `void`

#### onError?

(`ev`) => `void`

#### onMessage?

(`ev`) => `void`

#### onOpen?

(`ev`) => `void`

#### options?

`RTCDataChannelInit`

## Returns

`RTCDataChannel`

The data channel.

## Author

## Dailker
