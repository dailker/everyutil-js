[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseURL](../README.md) / parseURL

# Function: parseURL()

> **parseURL**(`url`): `object`

Defined in: [network/parseURL.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/parseURL.ts#L10)

Parses a URL string into its components.

Example: parseURL("https://example.com:8080/path?foo=bar#hash") → { protocol, host, port, path, query, hash }

## Parameters

### url

`string`

The URL string to parse.

## Returns

`object`

Parsed URL components.

### hash

> **hash**: `string`

### host

> **host**: `string`

### path

> **path**: `string`

### port

> **port**: `string`

### protocol

> **protocol**: `string`

### query

> **query**: `string`

## Author

## Dailker
