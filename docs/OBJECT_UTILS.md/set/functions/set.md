[**OBJECT_UTILS**](../../README.md)

***

[OBJECT_UTILS](../../README.md) / [set](../README.md) / set

# Function: set()

> **set**(`obj`, `path`, `value`): `any`

Defined in: [set.ts:12](https://github.com/dailker/everyutil/blob/ed6336a7c6553ed095d55eb280ece446462248a8/src/object/set.ts#L12)

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
