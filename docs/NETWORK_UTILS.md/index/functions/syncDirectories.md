[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / syncDirectories

# Function: syncDirectories()

> **syncDirectories**(`src`, `dest`, `options?`): `Promise`\<`void`\>

Defined in: [fs/syncDirectories.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/syncDirectories.ts#L10)

Synchronizes two directories, copying new/changed files and optionally deleting extras.

## Parameters

### src

`string`

Source directory.

### dest

`string`

Destination directory.

### options?

[`SyncOptions`](../interfaces/SyncOptions.md)

Sync options.

## Returns

`Promise`\<`void`\>

Resolves when sync is complete.

## Author

## Dailker
