[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getGeoBasedURL](../README.md) / getGeoBasedURL

# Function: getGeoBasedURL()

> **getGeoBasedURL**(`baseUrl`, `geoData`): `string`

Defined in: [getGeoBasedURL.ts:11](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/getGeoBasedURL.ts#L11)

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
