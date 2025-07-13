[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [negotiateConnection](../README.md) / negotiateConnection

# Function: negotiateConnection()

> **negotiateConnection**(`pc`, `remoteDesc`): `Promise`\<`RTCSessionDescriptionInit`\>

Defined in: [network/negotiateConnection.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/negotiateConnection.ts#L11)

Automates offer/answer negotiation for a peer connection.

Example: await negotiateConnection(pc, remoteDesc)

## Parameters

### pc

`RTCPeerConnection`

The peer connection.

### remoteDesc

`RTCSessionDescriptionInit`

Remote offer/answer.

## Returns

`Promise`\<`RTCSessionDescriptionInit`\>

Local description.

## Author

## Dailker
