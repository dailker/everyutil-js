[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [combineFetchers](../README.md) / combineFetchers

# Function: combineFetchers()

> **combineFetchers**\<`T`\>(...`fetchers`): (...`args`) => `Promise`\<`T`\>

Defined in: [combineFetchers.ts:10](https://github.com/dailker/everyutil/blob/0ec5ce08552e5059ec58e2975404aeb74a6202b1/src/network/combineFetchers.ts#L10)

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
