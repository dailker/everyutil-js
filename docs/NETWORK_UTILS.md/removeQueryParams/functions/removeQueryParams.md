[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [removeQueryParams](../README.md) / removeQueryParams

# Function: removeQueryParams()

> **removeQueryParams**(`url`, `keys`): `string`

Defined in: [removeQueryParams.ts:11](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/removeQueryParams.ts#L11)

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
