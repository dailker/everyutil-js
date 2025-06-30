[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithAbort](../README.md) / fetchWithAbort

# Function: fetchWithAbort()

> **fetchWithAbort**(`url`, `options?`, `timeoutMs?`, `signal?`): `Promise`\<`Response`\>

Defined in: [network/fetchWithAbort.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/fetchWithAbort.ts#L11)

Fetch with abort support (auto-cancels on timeout or event).

## Parameters

### url

`string`

The request URL.

### options?

`RequestInit` = `{}`

Fetch options.

### timeoutMs?

`number`

Timeout in ms (optional).

### signal?

`AbortSignal`

Optional external abort signal.

## Returns

`Promise`\<`Response`\>

The fetch response.

## Author

## Dailker
