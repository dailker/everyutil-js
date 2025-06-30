[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseURL](../README.md) / parseURL

# Function: parseURL()

> **parseURL**(`url`): `object`

Defined in: [parseURL.ts:10](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/parseURL.ts#L10)

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
