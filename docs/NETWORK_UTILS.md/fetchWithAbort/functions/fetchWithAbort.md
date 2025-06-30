[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithAbort](../README.md) / fetchWithAbort

# Function: fetchWithAbort()

> **fetchWithAbort**(`url`, `options?`, `timeoutMs?`, `signal?`): `Promise`\<`Response`\>

Defined in: [network/fetchWithAbort.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/fetchWithAbort.ts#L11)

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
