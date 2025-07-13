[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getUserMediaSafe](../README.md) / getUserMediaSafe

# Function: getUserMediaSafe()

> **getUserMediaSafe**(`constraints`): `Promise`\<`null` \| `MediaStream`\>

Defined in: [network/getUserMediaSafe.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/getUserMediaSafe.ts#L10)

Promisified, fallback-enabled getUserMedia.

Example: getUserMediaSafe({ video: true })

## Parameters

### constraints

`MediaStreamConstraints`

Media constraints.

## Returns

`Promise`\<`null` \| `MediaStream`\>

MediaStream or null if failed.

## Author

## Dailker
