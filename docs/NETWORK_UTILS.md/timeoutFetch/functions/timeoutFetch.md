[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [timeoutFetch](../README.md) / timeoutFetch

# Function: timeoutFetch()

> **timeoutFetch**(`fetchFn`, `ms`): `Promise`\<`any`\>

Defined in: [network/timeoutFetch.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/timeoutFetch.ts#L11)

Aborts a fetch if it takes longer than ms.

Example: timeoutFetch(fetchFn, 1000)

## Parameters

### fetchFn

(`signal`) => `Promise`\<`any`\>

Fetch function accepting AbortSignal.

### ms

`number`

Timeout in ms.

## Returns

`Promise`\<`any`\>

The fetch result or throws on timeout.

## Author

## Dailker
