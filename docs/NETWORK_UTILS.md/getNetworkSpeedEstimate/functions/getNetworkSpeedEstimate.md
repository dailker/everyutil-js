[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getNetworkSpeedEstimate](../README.md) / getNetworkSpeedEstimate

# Function: getNetworkSpeedEstimate()

> **getNetworkSpeedEstimate**(): `Promise`\<`null` \| \{ `latencyMs`: `number`; `speedMbps`: `number`; \}\>

Defined in: [getNetworkSpeedEstimate.ts:9](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/getNetworkSpeedEstimate.ts#L9)

Estimates network speed by downloading a known asset and timing it.

Example: getNetworkSpeedEstimate() → { speedMbps: 10.5, latencyMs: 120 }

## Returns

`Promise`\<`null` \| \{ `latencyMs`: `number`; `speedMbps`: `number`; \}\>

Speed and latency or null if failed.

## Author

## Dailker
