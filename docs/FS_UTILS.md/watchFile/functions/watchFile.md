[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [watchFile](../README.md) / watchFile

# Function: watchFile()

> **watchFile**(`path`, `callback`): `FSWatcher`

Defined in: [watchFile.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/watchFile.ts#L9)

Watches a file for changes and triggers the callback on change events.

## Parameters

### path

`string`

The file path.

### callback

(`eventType`, `filename`) => `void`

Callback for change events.

## Returns

`FSWatcher`

The FSWatcher instance.

## Author

## Dailker
