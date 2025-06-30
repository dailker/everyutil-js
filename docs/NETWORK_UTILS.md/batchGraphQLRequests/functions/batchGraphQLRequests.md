[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [batchGraphQLRequests](../README.md) / batchGraphQLRequests

# Function: batchGraphQLRequests()

> **batchGraphQLRequests**(`queries`, `endpoint`): `Promise`\<`any`[]\>

Defined in: [batchGraphQLRequests.ts:11](https://github.com/dailker/everyutil/blob/0ec5ce08552e5059ec58e2975404aeb74a6202b1/src/network/batchGraphQLRequests.ts#L11)

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
