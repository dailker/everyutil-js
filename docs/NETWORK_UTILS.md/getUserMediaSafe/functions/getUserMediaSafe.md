[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getUserMediaSafe](../README.md) / getUserMediaSafe

# Function: getUserMediaSafe()

> **getUserMediaSafe**(`constraints`): `Promise`\<`null` \| `MediaStream`\>

Defined in: [network/getUserMediaSafe.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/getUserMediaSafe.ts#L10)

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
