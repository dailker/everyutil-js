[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithETagCaching](../README.md) / fetchWithETagCaching

# Function: fetchWithETagCaching()

> **fetchWithETagCaching**(`url`, `previousETag?`): `Promise`\<\{ `etag`: `null` \| `string`; `notModified`: `boolean`; `response`: `Response`; \}\>

Defined in: [network/fetchWithETagCaching.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/fetchWithETagCaching.ts#L11)

Fetches with ETag caching using If-None-Match and handles 304.

Example: fetchWithETagCaching(url, etag)

## Parameters

### url

`string`

The URL to fetch.

### previousETag?

`string`

Previous ETag value.

## Returns

`Promise`\<\{ `etag`: `null` \| `string`; `notModified`: `boolean`; `response`: `Response`; \}\>

Result object.

## Author

## Dailker
