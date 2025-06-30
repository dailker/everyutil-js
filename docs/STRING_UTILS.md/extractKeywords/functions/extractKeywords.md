[**STRING_UTILS**](../../README.md)

***

[STRING_UTILS](../../README.md) / [extractKeywords](../README.md) / extractKeywords

# Function: extractKeywords()

> **extractKeywords**(`str`, `stopwords?`): `string`[]

Defined in: [extractKeywords.ts:11](https://github.com/dailker/everyutil/blob/b3489bb6f319079994023a8bfde262e0cfc42fe7/src/string/extractKeywords.ts#L11)

Extracts keywords from a string, removing stopwords and punctuation.

Example: extractKeywords("The cat sat on the mat.", ["the", "on"]) → ['cat', 'sat', 'mat']

## Parameters

### str

`string`

The input string.

### stopwords?

`string`[] = `[]`

Words to exclude from the result.

## Returns

`string`[]

Array of keywords.

## Author

## Dailker
