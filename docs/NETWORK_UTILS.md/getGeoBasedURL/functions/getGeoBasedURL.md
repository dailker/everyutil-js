[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getGeoBasedURL](../README.md) / getGeoBasedURL

# Function: getGeoBasedURL()

> **getGeoBasedURL**(`baseUrl`, `geoData`): `string`

Defined in: [network/getGeoBasedURL.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/getGeoBasedURL.ts#L11)

Selects a geo-based resource URL based on region data.

Example: getGeoBasedURL("https://cdn.com/asset", { region: "eu" }) → "https://cdn-eu.com/asset"

## Parameters

### baseUrl

`string`

The base URL.

### geoData

Geo info (e.g., region).

#### region?

`string`

## Returns

`string`

The geo-based URL.

## Author

## Dailker
