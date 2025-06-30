[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [detectRedirect](../README.md) / detectRedirect

# Function: detectRedirect()

> **detectRedirect**(`url`, `options?`, `maxRedirects?`): `Promise`\<`Response`\>

Defined in: [network/detectRedirect.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/detectRedirect.ts#L10)

Detects and follows/limits redirects manually.

## Parameters

### url

`string`

The request URL.

### options?

`RequestInit`

Fetch options.

### maxRedirects?

`number` = `5`

Maximum redirects to follow.

## Returns

`Promise`\<`Response`\>

The final response.

## Author

## Dailker
