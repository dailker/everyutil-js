[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [batchGraphQLRequests](../README.md) / batchGraphQLRequests

# Function: batchGraphQLRequests()

> **batchGraphQLRequests**(`queries`, `endpoint`): `Promise`\<`any`[]\>

Defined in: [network/batchGraphQLRequests.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/batchGraphQLRequests.ts#L11)

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
