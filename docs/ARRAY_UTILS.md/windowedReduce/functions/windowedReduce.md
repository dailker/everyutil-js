[**ARRAY_UTILS**](../../README.md)

***

[ARRAY_UTILS](../../README.md) / [windowedReduce](../README.md) / windowedReduce

# Function: windowedReduce()

> **windowedReduce**\<`T`, `U`\>(`array`, `reducer`, `initialValue`, `windowSize`): `U`

Defined in: [windowedReduce.ts:11](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/array/windowedReduce.ts#L11)

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
