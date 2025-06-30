[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [mockFetchOnce](../README.md) / mockFetchOnce

# Function: mockFetchOnce()

> **mockFetchOnce**(`url`, `response`): () => `void`

Defined in: [network/mockFetchOnce.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/mockFetchOnce.ts#L11)

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
