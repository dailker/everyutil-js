[**FUNCTION_UTILS**](../../README.md)

***

[FUNCTION_UTILS](../../README.md) / [throttle](../README.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `wait`): (...`args`) => `void`

Defined in: [throttle.ts:11](https://github.com/dailker/everyutil/blob/41b2b91e0d43fdbbea18f7ea0bcf4029dd413f41/src/function/throttle.ts#L11)

Returns a throttled version of the function that only invokes the original function at most once per wait period.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

The function to throttle.

### wait

`number`

The number of milliseconds to throttle invocations to.

## Returns

The throttled function.

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
const throttled = throttle(() => console.log('hi'), 1000);
```
