[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [extractPathParams](../README.md) / extractPathParams

# Function: extractPathParams()

> **extractPathParams**(`url`, `routePattern`): `Record`\<`string`, `string`\>

Defined in: [extractPathParams.ts:11](https://github.com/dailker/everyutil/blob/2c6c8c707de5d4a5d228d272d2d21855929838e2/src/network/extractPathParams.ts#L11)

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
