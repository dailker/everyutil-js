[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseJSONResponse](../README.md) / parseJSONResponse

# Function: parseJSONResponse()

> **parseJSONResponse**\<`T`\>(`response`): `Promise`\<`null` \| `T`\>

Defined in: [network/parseJSONResponse.ts:6](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/parseJSONResponse.ts#L6)

Safely parses a JSON response, returning null on error.

## Type Parameters

### T

`T` = `any`

## Parameters

### response

`Response`

The fetch Response object.

## Returns

`Promise`\<`null` \| `T`\>

The parsed JSON or null.
