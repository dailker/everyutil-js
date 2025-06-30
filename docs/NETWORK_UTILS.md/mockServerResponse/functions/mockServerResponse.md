[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [mockServerResponse](../README.md) / mockServerResponse

# Function: mockServerResponse()

> **mockServerResponse**(`method`, `route`, `handler`): () => `void`

Defined in: [mockServerResponse.ts:12](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/mockServerResponse.ts#L12)

Mocks server response for a method/route with a handler function.

Example: mockServerResponse('GET', '/api', (req) => ...)

## Parameters

### method

`string`

HTTP method.

### route

`string`

Route to match.

### handler

(`req`) => `Response` \| `Promise`\<`Response`\>

Handler function.

## Returns

Restore function.

> (): `void`

### Returns

`void`

## Author

## Dailker
