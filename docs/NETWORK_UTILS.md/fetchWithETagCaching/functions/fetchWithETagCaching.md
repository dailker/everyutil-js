[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithETagCaching](../README.md) / fetchWithETagCaching

# Function: fetchWithETagCaching()

> **fetchWithETagCaching**(`url`, `previousETag?`): `Promise`\<\{ `etag`: `null` \| `string`; `notModified`: `boolean`; `response`: `Response`; \}\>

Defined in: [network/fetchWithETagCaching.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/fetchWithETagCaching.ts#L11)

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
