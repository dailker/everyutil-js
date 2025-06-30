[**OBJECT_UTILS**](../../README.md)

***

[OBJECT_UTILS](../../README.md) / [get](../README.md) / get

# Function: get()

> **get**(`obj`, `path`, `defaultValue?`): `any`

Defined in: [get.ts:12](https://github.com/dailker/everyutil/blob/41b2b91e0d43fdbbea18f7ea0bcf4029dd413f41/src/object/get.ts#L12)

Gets the value at path of object.

## Parameters

### obj

`any`

The object to query.

### path

The path of the property to get.

`string` | `string`[]

### defaultValue?

`any`

The value returned if the resolved value is undefined.

## Returns

`any`

The resolved value.

## Author

dailker

## Example

```ts
get({ a: { b: 2 } }, 'a.b'); // 2
```
