[**FUNCTION_UTILS**](../../README.md)

***

[FUNCTION_UTILS](../../README.md) / [once](../README.md) / once

# Function: once()

> **once**\<`T`\>(`func`): (...`args`) => `undefined` \| `ReturnType`\<`T`\>

Defined in: [once.ts:10](https://github.com/dailker/everyutil/blob/669c80948347059212c7a0ef09fd720ca9b1c411/src/function/once.ts#L10)

Returns a function that can only be called once. Repeated calls return the first result.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

The function to restrict.

## Returns

The new restricted function.

> (...`args`): `undefined` \| `ReturnType`\<`T`\>

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`undefined` \| `ReturnType`\<`T`\>

## Author

dailker

## Example

```ts
const initialize = once(() => createApp());
```
