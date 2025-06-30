[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [watchFileWithDebounce](../README.md) / watchFileWithDebounce

# Function: watchFileWithDebounce()

> **watchFileWithDebounce**(`path`, `debounceMs`, `callback`): `void`

Defined in: [watchFileWithDebounce.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/watchFileWithDebounce.ts#L9)

Watches a file but debounces rapid changes, calling the callback only once after inactivity.

## Parameters

### path

`string`

File path.

### debounceMs

`number`

Debounce time in ms.

### callback

() => `void`

Callback function.

## Returns

`void`

## Author

## Dailker
