[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [uploadFileWithProgress](../README.md) / uploadFileWithProgress

# Function: uploadFileWithProgress()

> **uploadFileWithProgress**(`file`, `url`, `onProgress`): `Promise`\<`Response`\>

Defined in: [uploadFileWithProgress.ts:12](https://github.com/dailker/everyutil/blob/2a1290e25c1270a5e1af64099b97f8d5fc086e59/src/network/uploadFileWithProgress.ts#L12)

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
