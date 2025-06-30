[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [watchFile](../README.md) / watchFile

# Function: watchFile()

> **watchFile**(`path`, `callback`): `FSWatcher`

Defined in: [watchFile.ts:9](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/fs/watchFile.ts#L9)

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
