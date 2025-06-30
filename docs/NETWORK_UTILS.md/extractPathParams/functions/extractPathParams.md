[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [extractPathParams](../README.md) / extractPathParams

# Function: extractPathParams()

> **extractPathParams**(`url`, `routePattern`): `Record`\<`string`, `string`\>

Defined in: [network/extractPathParams.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/extractPathParams.ts#L11)

Extracts path parameters from a URL given a route pattern.

Example: extractPathParams("/user/123", "/user/:id") → { id: "123" }

## Parameters

### url

`string`

The URL.

### routePattern

`string`

The route pattern.

## Returns

`Record`\<`string`, `string`\>

Extracted params.

## Author

## Dailker
