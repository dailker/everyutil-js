[**STRING_UTILS**](../../README.md)

***

[STRING_UTILS](../../README.md) / [stringSimilarity](../README.md) / stringSimilarity

# Function: stringSimilarity()

> **stringSimilarity**(`a`, `b`): `number`

Defined in: [stringSimilarity.ts:12](https://github.com/dailker/everyutil/blob/bb767aea9d58118889b305a48f8f36431b1abbeb/src/string/stringSimilarity.ts#L12)

Returns a similarity score between two strings (0..1, Levenshtein-based).

Uses normalized Levenshtein distance: 1 means identical, 0 means completely different.
Example: stringSimilarity("kitten", "sitting") → 0.714

## Parameters

### a

`string`

First string.

### b

`string`

Second string.

## Returns

`number`

Similarity score between 0 and 1.

## Author

## Dailker
