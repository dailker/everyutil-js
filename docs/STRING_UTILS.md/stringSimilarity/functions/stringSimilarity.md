[**STRING_UTILS**](../../README.md)

***

[STRING_UTILS](../../README.md) / [stringSimilarity](../README.md) / stringSimilarity

# Function: stringSimilarity()

> **stringSimilarity**(`a`, `b`): `number`

Defined in: [stringSimilarity.ts:12](https://github.com/dailker/everyutil/blob/2581c2d178bc530a012cdac45251b2404ba4d9ac/src/string/stringSimilarity.ts#L12)

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
