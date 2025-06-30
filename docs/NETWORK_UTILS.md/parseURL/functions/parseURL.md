[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseURL](../README.md) / parseURL

# Function: parseURL()

> **parseURL**(`url`): `object`

Defined in: [network/parseURL.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/parseURL.ts#L10)

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
