[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [index](../README.md) / FileDiff

# Interface: FileDiff

Defined in: [fs/FileDiff.ts:5](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/FileDiff.ts#L5)

Represents a difference between two files or directories.

## Author

## Dailker

## Properties

### destStat?

> `optional` **destStat**: `Stats`

Defined in: [fs/FileDiff.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/FileDiff.ts#L9)

***

### path

> **path**: `string`

Defined in: [fs/FileDiff.ts:6](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/FileDiff.ts#L6)

***

### srcStat?

> `optional` **srcStat**: `Stats`

Defined in: [fs/FileDiff.ts:8](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/FileDiff.ts#L8)

***

### type

> **type**: `"modified"` \| `"added"` \| `"removed"` \| `"conflict"`

Defined in: [fs/FileDiff.ts:7](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/FileDiff.ts#L7)
