[**STRING_UTILS**](../../README.md)

***

[STRING_UTILS](../../README.md) / [extractKeywords](../README.md) / extractKeywords

# Function: extractKeywords()

> **extractKeywords**(`str`, `stopwords?`): `string`[]

Defined in: [extractKeywords.ts:11](https://github.com/dailker/everyutil/blob/62f89e7de05dc079cf02b7e7968c7505f395a23c/src/string/extractKeywords.ts#L11)

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
