[**FUNCTION_UTILS**](../../README.md)

***

[FUNCTION_UTILS](../../README.md) / [debounce](../README.md) / debounce

# Function: debounce()

> **debounce**\<`T`\>(`func`, `wait`): (...`args`) => `void`

Defined in: [debounce.ts:11](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/function/debounce.ts#L11)

Returns a debounced version of the function.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

The function to debounce.

### wait

`number`

The number of milliseconds to delay.

## Returns

The debounced function.

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Author

dailker

## Example

```ts
const debounced = debounce(() => console.log('hi'), 300);
```
