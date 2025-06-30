[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [batchGraphQLRequests](../README.md) / batchGraphQLRequests

# Function: batchGraphQLRequests()

> **batchGraphQLRequests**(`queries`, `endpoint`): `Promise`\<`any`[]\>

Defined in: [batchGraphQLRequests.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/batchGraphQLRequests.ts#L11)

Sends multiple GraphQL queries in one POST request.

Example: batchGraphQLRequests([{ query, variables }])

## Parameters

### queries

`object`[]

Array of queries.

### endpoint

`string`

GraphQL endpoint.

## Returns

`Promise`\<`any`[]\>

Array of results.

## Author

## Dailker
