[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / watchFileWithDebounce

# Function: watchFileWithDebounce()

> **watchFileWithDebounce**(`path`, `debounceMs`, `callback`): `void`

Defined in: [fs/watchFileWithDebounce.ts:9](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/fs/watchFileWithDebounce.ts#L9)

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
