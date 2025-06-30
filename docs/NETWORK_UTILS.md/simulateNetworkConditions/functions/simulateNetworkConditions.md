[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [simulateNetworkConditions](../README.md) / simulateNetworkConditions

# Function: simulateNetworkConditions()

> **simulateNetworkConditions**(`options`): (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: [network/simulateNetworkConditions.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/simulateNetworkConditions.ts#L10)

Simulates network conditions by wrapping fetch with delay and error rate.

Example: simulateNetworkConditions({ delay: 100, errorRate: 0.1 })

## Parameters

### options

Delay in ms, error rate (0-1).

#### delay?

`number`

#### errorRate?

`number`

## Returns

Wrapped fetch.

> (`input`, `init?`): `Promise`\<`Response`\>

### Parameters

#### input

`RequestInfo`

#### init?

`RequestInit`

### Returns

`Promise`\<`Response`\>

## Author

## Dailker
