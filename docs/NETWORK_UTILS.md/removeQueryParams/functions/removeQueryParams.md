[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [removeQueryParams](../README.md) / removeQueryParams

# Function: removeQueryParams()

> **removeQueryParams**(`url`, `keys`): `string`

Defined in: [removeQueryParams.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/removeQueryParams.ts#L11)

Removes multiple query parameters from a URL.

Example: removeQueryParams("/a?b=1&c=2", ["b"]) → "/a?c=2"

## Parameters

### url

`string`

The URL.

### keys

`string`[]

Keys to remove.

## Returns

`string`

The updated URL.

## Author

## Dailker
