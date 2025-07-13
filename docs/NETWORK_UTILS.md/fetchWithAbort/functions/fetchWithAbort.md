[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithAbort](../README.md) / fetchWithAbort

# Function: fetchWithAbort()

> **fetchWithAbort**(`url`, `options?`, `timeoutMs?`, `signal?`): `Promise`\<`Response`\>

Defined in: [network/fetchWithAbort.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/fetchWithAbort.ts#L11)

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
