[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [FileDiff](../README.md) / FileDiff

# Interface: FileDiff

Defined in: [FileDiff.ts:5](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/FileDiff.ts#L5)

Represents a difference between two files or directories.

## Author

## Dailker

## Properties

### destStat?

> `optional` **destStat**: `Stats`

Defined in: [FileDiff.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/FileDiff.ts#L9)

***

### path

> **path**: `string`

Defined in: [FileDiff.ts:6](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/FileDiff.ts#L6)

***

### srcStat?

> `optional` **srcStat**: `Stats`

Defined in: [FileDiff.ts:8](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/FileDiff.ts#L8)

***

### type

> **type**: `"modified"` \| `"added"` \| `"removed"` \| `"conflict"`

Defined in: [FileDiff.ts:7](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/FileDiff.ts#L7)
