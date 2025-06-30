[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [monitorDiskSpace](../README.md) / monitorDiskSpace

# Function: monitorDiskSpace()

> **monitorDiskSpace**(`path`, `thresholdBytes`, `callback`): `Promise`\<`void`\>

Defined in: [monitorDiskSpace.ts:10](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/monitorDiskSpace.ts#L10)

Monitors available disk space at a path and triggers callback when it drops below threshold.

## Parameters

### path

`string`

Path to monitor.

### thresholdBytes

`number`

Threshold in bytes.

### callback

(`freeSpace`) => `void`

Callback when below threshold.

## Returns

`Promise`\<`void`\>

## Author

## Dailker
