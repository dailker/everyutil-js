[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [combineFetchers](../README.md) / combineFetchers

# Function: combineFetchers()

> **combineFetchers**\<`T`\>(...`fetchers`): (...`args`) => `Promise`\<`T`\>

Defined in: [combineFetchers.ts:10](https://github.com/dailker/everyutil/blob/9768d00ced16ec8f4705df34c2fe47f2b1b47121/src/network/combineFetchers.ts#L10)

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
