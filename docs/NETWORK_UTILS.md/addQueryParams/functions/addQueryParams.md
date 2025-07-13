[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [addQueryParams](../README.md) / addQueryParams

# Function: addQueryParams()

> **addQueryParams**(`url`, `params`): `string`

Defined in: [network/addQueryParams.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/addQueryParams.ts#L11)

Adds or merges query parameters into a URL.

Example: addQueryParams('https://a.com', { foo: '1' }) → 'https://a.com?foo=1'

## Parameters

### url

`string`

The URL.

### params

`Record`\<`string`, `string`\>

Params to add/merge.

## Returns

`string`

The updated URL.

## Author

## Dailker
