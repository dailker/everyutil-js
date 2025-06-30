[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [combineFetchers](../README.md) / combineFetchers

# Function: combineFetchers()

> **combineFetchers**\<`T`\>(...`fetchers`): (...`args`) => `Promise`\<`T`\>

Defined in: [network/combineFetchers.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/combineFetchers.ts#L10)

Tries multiple fetchers in sequence, returning the first successful result.

Example: combineFetchers(f1, f2)(...args)

## Type Parameters

### T

`T` = `any`

## Parameters

### fetchers

...(...`args`) => `Promise`\<`T`\>[]

Fetcher functions.

## Returns

Combined fetcher.

> (...`args`): `Promise`\<`T`\>

### Parameters

#### args

...`any`[]

### Returns

`Promise`\<`T`\>

## Author

## Dailker
