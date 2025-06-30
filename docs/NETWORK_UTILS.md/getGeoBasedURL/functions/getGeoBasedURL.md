[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [getGeoBasedURL](../README.md) / getGeoBasedURL

# Function: getGeoBasedURL()

> **getGeoBasedURL**(`baseUrl`, `geoData`): `string`

Defined in: [network/getGeoBasedURL.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/getGeoBasedURL.ts#L11)

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
