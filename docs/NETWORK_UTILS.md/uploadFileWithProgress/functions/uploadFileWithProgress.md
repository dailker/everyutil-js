[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [uploadFileWithProgress](../README.md) / uploadFileWithProgress

# Function: uploadFileWithProgress()

> **uploadFileWithProgress**(`file`, `url`, `onProgress`): `Promise`\<`Response`\>

Defined in: [network/uploadFileWithProgress.ts:12](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/uploadFileWithProgress.ts#L12)

Uploads a file to a URL with progress events.

Example: uploadFileWithProgress(file, url, p => ...)

## Parameters

### file

`File`

The file to upload.

### url

`string`

The upload URL.

### onProgress

(`progress`) => `void`

Progress callback (0-1).

## Returns

`Promise`\<`Response`\>

The fetch response.

## Author

## Dailker
