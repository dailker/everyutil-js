[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [addQueryParams](../README.md) / addQueryParams

# Function: addQueryParams()

> **addQueryParams**(`url`, `params`): `string`

Defined in: [network/addQueryParams.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/addQueryParams.ts#L11)

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
