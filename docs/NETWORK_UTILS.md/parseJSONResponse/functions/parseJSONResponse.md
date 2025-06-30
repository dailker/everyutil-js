[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseJSONResponse](../README.md) / parseJSONResponse

# Function: parseJSONResponse()

> **parseJSONResponse**\<`T`\>(`response`): `Promise`\<`null` \| `T`\>

Defined in: [parseJSONResponse.ts:6](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/parseJSONResponse.ts#L6)

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
