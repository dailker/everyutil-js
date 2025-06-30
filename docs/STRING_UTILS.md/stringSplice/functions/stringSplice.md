[**STRING_UTILS**](../../README.md)

***

[STRING_UTILS](../../README.md) / [stringSplice](../README.md) / stringSplice

# Function: stringSplice()

> **stringSplice**(`str`, `start`, `deleteCount`, `insert?`): `string`

Defined in: [stringSplice.ts:13](https://github.com/dailker/everyutil/blob/c097f0fc92f833ed4a91824bfd902e8ca984c4de/src/string/stringSplice.ts#L13)

Like Array.splice but for strings. Removes and/or inserts text at a given position.

Example: stringSplice("abcdef", 2, 2, "ZZ") → "abZZef"

## Parameters

### str

`string`

The original string.

### start

`number`

The index at which to start changing the string.

### deleteCount

`number`

The number of characters to remove.

### insert?

`string` = `''`

The string to insert at the start position.

## Returns

`string`

The resulting string after splicing.

## Author

## Dailker
