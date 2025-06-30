[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [windowedReduce](../README.md) / windowedReduce

# Function: windowedReduce()

> **windowedReduce**\<`T`, `U`\>(`array`, `reducer`, `initialValue`, `windowSize`): `U`

Defined in: [windowedReduce.ts:11](https://github.com/dailker/everyutil/blob/c55c841d32caf5da88acfcc363073946269cfe27/src/array/windowedReduce.ts#L11)

Applies a reducer function on sliding windows of the array.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### array

`T`[]

The input array.

### reducer

(`acc`, `window`, `index`, `array`) => `U`

The reducer function.

### initialValue

`U`

The initial accumulator value.

### windowSize

`number`

The size of the sliding window.

## Returns

`U`

The reduced value.

## Author

## Dailker
