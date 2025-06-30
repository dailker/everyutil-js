[**FUNCTION_UTILS**](../../README.md)

***

[FUNCTION_UTILS](../../README.md) / [once](../README.md) / once

# Function: once()

> **once**\<`T`\>(`func`): (...`args`) => `undefined` \| `ReturnType`\<`T`\>

Defined in: [once.ts:10](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/function/once.ts#L10)

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
