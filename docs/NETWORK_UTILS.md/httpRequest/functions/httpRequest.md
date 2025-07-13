[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [httpRequest](../README.md) / httpRequest

# Function: httpRequest()

> **httpRequest**(`options`, `body?`): `Promise`\<\{ `body`: `Buffer`; `headers`: `any`; `status`: `number`; \}\>

Defined in: [network/httpRequest.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/httpRequest.ts#L11)

Simple HTTP request wrapper using Node's native modules.

Example: httpRequest({ hostname, port, path, method })

## Parameters

### options

`any`

HTTP request options.

### body?

Optional request body.

`string` | `Buffer`\<`ArrayBufferLike`\>

## Returns

`Promise`\<\{ `body`: `Buffer`; `headers`: `any`; `status`: `number`; \}\>

Response object.

## Author

## Dailker
