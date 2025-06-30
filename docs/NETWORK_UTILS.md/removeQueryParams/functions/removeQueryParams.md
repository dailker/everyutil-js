[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [removeQueryParams](../README.md) / removeQueryParams

# Function: removeQueryParams()

> **removeQueryParams**(`url`, `keys`): `string`

Defined in: [network/removeQueryParams.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/removeQueryParams.ts#L11)

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
