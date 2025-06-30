[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [stripTrackingParams](../README.md) / stripTrackingParams

# Function: stripTrackingParams()

> **stripTrackingParams**(`url`): `string`

Defined in: [stripTrackingParams.ts:10](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/stripTrackingParams.ts#L10)

Removes common tracking query parameters (e.g., utm_*) from a URL.

Example: stripTrackingParams("https://a.com/?utm_source=foo&id=1") → "https://a.com/?id=1"

## Parameters

### url

`string`

The URL to clean.

## Returns

`string`

The cleaned URL.

## Author

## Dailker
