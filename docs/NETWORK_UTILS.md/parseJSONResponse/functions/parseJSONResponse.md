[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseJSONResponse](../README.md) / parseJSONResponse

# Function: parseJSONResponse()

> **parseJSONResponse**\<`T`\>(`response`): `Promise`\<`null` \| `T`\>

Defined in: [parseJSONResponse.ts:6](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/parseJSONResponse.ts#L6)

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
