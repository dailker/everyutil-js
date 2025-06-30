[**STRING_UTILS**](../../README.md)

***

[STRING_UTILS](../../README.md) / [extractKeywords](../README.md) / extractKeywords

# Function: extractKeywords()

> **extractKeywords**(`str`, `stopwords?`): `string`[]

Defined in: [extractKeywords.ts:11](https://github.com/dailker/everyutil/blob/d12555c550c1d59295f536d15822ff0e97aceecb/src/string/extractKeywords.ts#L11)

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
