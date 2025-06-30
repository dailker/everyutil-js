[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getNetworkSpeedEstimate](../README.md) / getNetworkSpeedEstimate

# Function: getNetworkSpeedEstimate()

> **getNetworkSpeedEstimate**(): `Promise`\<`null` \| \{ `latencyMs`: `number`; `speedMbps`: `number`; \}\>

Defined in: [getNetworkSpeedEstimate.ts:9](https://github.com/dailker/everyutil/blob/9ec04d41a381dab61073bf86e9abc70eaf55066d/src/network/getNetworkSpeedEstimate.ts#L9)

Estimates network speed by downloading a known asset and timing it.

Example: getNetworkSpeedEstimate() → { speedMbps: 10.5, latencyMs: 120 }

## Returns

`Promise`\<`null` \| \{ `latencyMs`: `number`; `speedMbps`: `number`; \}\>

Speed and latency or null if failed.

## Author

## Dailker
