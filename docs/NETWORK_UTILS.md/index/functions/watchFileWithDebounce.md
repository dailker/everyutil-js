[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / watchFileWithDebounce

# Function: watchFileWithDebounce()

> **watchFileWithDebounce**(`path`, `debounceMs`, `callback`): `void`

Defined in: [fs/watchFileWithDebounce.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/watchFileWithDebounce.ts#L9)

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
