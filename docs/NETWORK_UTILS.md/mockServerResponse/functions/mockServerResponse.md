[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [mockServerResponse](../README.md) / mockServerResponse

# Function: mockServerResponse()

> **mockServerResponse**(`method`, `route`, `handler`): () => `void`

Defined in: [network/mockServerResponse.ts:12](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/mockServerResponse.ts#L12)

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
