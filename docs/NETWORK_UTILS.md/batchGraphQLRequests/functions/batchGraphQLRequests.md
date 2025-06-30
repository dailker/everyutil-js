[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [batchGraphQLRequests](../README.md) / batchGraphQLRequests

# Function: batchGraphQLRequests()

> **batchGraphQLRequests**(`queries`, `endpoint`): `Promise`\<`any`[]\>

Defined in: [batchGraphQLRequests.ts:11](https://github.com/dailker/everyutil/blob/febb9ddd747c27fb11272f2ad88aedb1ae4d7cba/src/network/batchGraphQLRequests.ts#L11)

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
