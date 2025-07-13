[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [stripTrackingParams](../README.md) / stripTrackingParams

# Function: stripTrackingParams()

> **stripTrackingParams**(`url`): `string`

Defined in: [network/stripTrackingParams.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/stripTrackingParams.ts#L10)

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
