[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [negotiateConnection](../README.md) / negotiateConnection

# Function: negotiateConnection()

> **negotiateConnection**(`pc`, `remoteDesc`): `Promise`\<`RTCSessionDescriptionInit`\>

Defined in: [network/negotiateConnection.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/negotiateConnection.ts#L11)

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
