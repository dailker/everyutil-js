[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / monitorDiskSpace

# Function: monitorDiskSpace()

> **monitorDiskSpace**(`path`, `thresholdBytes`, `callback`): `Promise`\<`void`\>

Defined in: [fs/monitorDiskSpace.ts:10](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/fs/monitorDiskSpace.ts#L10)

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
