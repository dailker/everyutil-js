[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [httpRequest](../README.md) / httpRequest

# Function: httpRequest()

> **httpRequest**(`options`, `body?`): `Promise`\<\{ `body`: `Buffer`; `headers`: `any`; `status`: `number`; \}\>

Defined in: [network/httpRequest.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/httpRequest.ts#L11)

Simple HTTP request wrapper using Node's native modules.

Example: httpRequest({ hostname, port, path, method })

## Parameters

### options

`any`

HTTP request options.

### body?

Optional request body.

`string` | `Buffer`

## Returns

`Promise`\<\{ `body`: `Buffer`; `headers`: `any`; `status`: `number`; \}\>

Response object.

## Author

## Dailker
