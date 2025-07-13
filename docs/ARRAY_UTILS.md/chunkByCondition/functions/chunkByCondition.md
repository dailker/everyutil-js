[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [chunkByCondition](../README.md) / chunkByCondition

# Function: chunkByCondition()

> **chunkByCondition**\<`T`\>(`array`, `fn`): `T`[][]

Defined in: [chunkByCondition.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/array/chunkByCondition.ts#L9)

Splits an array into chunks where the provided function returns true for consecutive elements.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The input array.

### fn

(`a`, `b`, `idx`, `arr`) => `boolean`

Condition function, receives current and previous element.

## Returns

`T`[][]

- Array of chunks.

## Author

## Dailker
