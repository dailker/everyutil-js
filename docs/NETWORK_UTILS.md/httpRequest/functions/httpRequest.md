[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [httpRequest](../README.md) / httpRequest

# Function: httpRequest()

> **httpRequest**(`options`, `body?`): `Promise`\<\{ `body`: `Buffer`; `headers`: `any`; `status`: `number`; \}\>

Defined in: [network/httpRequest.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/httpRequest.ts#L11)

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
