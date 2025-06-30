[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [timeoutFetch](../README.md) / timeoutFetch

# Function: timeoutFetch()

> **timeoutFetch**(`fetchFn`, `ms`): `Promise`\<`any`\>

Defined in: [timeoutFetch.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/timeoutFetch.ts#L11)

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
