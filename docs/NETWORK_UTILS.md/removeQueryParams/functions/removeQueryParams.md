[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [removeQueryParams](../README.md) / removeQueryParams

# Function: removeQueryParams()

> **removeQueryParams**(`url`, `keys`): `string`

Defined in: [network/removeQueryParams.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/removeQueryParams.ts#L11)

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
