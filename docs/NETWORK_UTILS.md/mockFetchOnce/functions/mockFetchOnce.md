[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [mockFetchOnce](../README.md) / mockFetchOnce

# Function: mockFetchOnce()

> **mockFetchOnce**(`url`, `response`): () => `void`

Defined in: [mockFetchOnce.ts:11](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/mockFetchOnce.ts#L11)

Temporarily mocks global fetch for a single URL/response pair.

Example: mockFetchOnce('/api', { status: 200, body: 'ok' })

## Parameters

### url

`string`

The URL to mock.

### response

The mock response.

#### body?

`any`

#### headers?

`Record`\<`string`, `string`\>

#### status?

`number`

## Returns

Restore function.

> (): `void`

### Returns

`void`

## Author

## Dailker
