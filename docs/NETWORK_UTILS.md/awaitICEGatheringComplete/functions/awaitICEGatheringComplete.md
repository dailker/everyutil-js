[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [awaitICEGatheringComplete](../README.md) / awaitICEGatheringComplete

# Function: awaitICEGatheringComplete()

> **awaitICEGatheringComplete**(`pc`): `Promise`\<`void`\>

Defined in: [network/awaitICEGatheringComplete.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/awaitICEGatheringComplete.ts#L10)

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
