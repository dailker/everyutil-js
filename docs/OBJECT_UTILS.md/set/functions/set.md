[**OBJECT_UTILS**](../../README.md)

***

[OBJECT_UTILS](../../README.md) / [set](../README.md) / set

# Function: set()

> **set**(`obj`, `path`, `value`): `any`

Defined in: [set.ts:12](https://github.com/dailker/everyutil/blob/669c80948347059212c7a0ef09fd720ca9b1c411/src/object/set.ts#L12)

Sets the value at path of object.

## Parameters

### obj

`any`

The object to modify.

### path

The path of the property to set.

`string` | `string`[]

### value

`any`

The value to set.

## Returns

`any`

The updated object.

## Author

dailker

## Example

```ts
set({}, 'a.b', 2); // { a: { b: 2 } }
```
