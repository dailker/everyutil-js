[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / watchFile

# Function: watchFile()

> **watchFile**(`path`, `callback`): `FSWatcher`

Defined in: [fs/watchFile.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/watchFile.ts#L9)

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
