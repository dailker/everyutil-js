[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [awaitICEGatheringComplete](../README.md) / awaitICEGatheringComplete

# Function: awaitICEGatheringComplete()

> **awaitICEGatheringComplete**(`pc`): `Promise`\<`void`\>

Defined in: [network/awaitICEGatheringComplete.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/awaitICEGatheringComplete.ts#L10)

Awaits ICE candidate gathering to complete for a peer connection.

Example: await awaitICEGatheringComplete(pc)

## Parameters

### pc

`RTCPeerConnection`

The peer connection.

## Returns

`Promise`\<`void`\>

Resolves when ICE gathering is complete.

## Author

## Dailker
