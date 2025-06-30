[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [fetchWithETagCaching](../README.md) / fetchWithETagCaching

# Function: fetchWithETagCaching()

> **fetchWithETagCaching**(`url`, `previousETag?`): `Promise`\<\{ `etag`: `null` \| `string`; `notModified`: `boolean`; `response`: `Response`; \}\>

Defined in: [fetchWithETagCaching.ts:11](https://github.com/dailker/everyutil/blob/0ec5ce08552e5059ec58e2975404aeb74a6202b1/src/network/fetchWithETagCaching.ts#L11)

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
