[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [mockFetchOnce](../README.md) / mockFetchOnce

# Function: mockFetchOnce()

> **mockFetchOnce**(`url`, `response`): () => `void`

Defined in: [network/mockFetchOnce.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/mockFetchOnce.ts#L11)

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
