[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [batchGraphQLRequests](../README.md) / batchGraphQLRequests

# Function: batchGraphQLRequests()

> **batchGraphQLRequests**(`queries`, `endpoint`): `Promise`\<`any`[]\>

Defined in: [batchGraphQLRequests.ts:11](https://github.com/dailker/everyutil/blob/54be0bab567ca8e189c5982902c59f3b7981d51d/src/network/batchGraphQLRequests.ts#L11)

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
