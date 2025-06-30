[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [combineFetchers](../README.md) / combineFetchers

# Function: combineFetchers()

> **combineFetchers**\<`T`\>(...`fetchers`): (...`args`) => `Promise`\<`T`\>

Defined in: [combineFetchers.ts:10](https://github.com/dailker/everyutil/blob/9ec04d41a381dab61073bf86e9abc70eaf55066d/src/network/combineFetchers.ts#L10)

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
