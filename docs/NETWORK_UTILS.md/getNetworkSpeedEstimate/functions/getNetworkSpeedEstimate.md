[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getNetworkSpeedEstimate](../README.md) / getNetworkSpeedEstimate

# Function: getNetworkSpeedEstimate()

> **getNetworkSpeedEstimate**(): `Promise`\<`null` \| \{ `latencyMs`: `number`; `speedMbps`: `number`; \}\>

Defined in: [getNetworkSpeedEstimate.ts:9](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/getNetworkSpeedEstimate.ts#L9)

Estimates network speed by downloading a known asset and timing it.

Example: getNetworkSpeedEstimate() → { speedMbps: 10.5, latencyMs: 120 }

## Returns

`Promise`\<`null` \| \{ `latencyMs`: `number`; `speedMbps`: `number`; \}\>

Speed and latency or null if failed.

## Author

## Dailker
