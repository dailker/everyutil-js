[**COLOR_UTILS**](../../README.md)

***

[COLOR_UTILS](../../README.md) / [parseCssVariables](../README.md) / parseCssVariables

# Function: parseCssVariables()

> **parseCssVariables**(`styleString`): `Record`\<`string`, `string`\>

Defined in: [parseCssVariables.ts:10](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/color/parseCssVariables.ts#L10)

Parses CSS variables and returns color values.

Example: parseCssVariables(":root { --main: #336699; }") → { '--main': '#336699' }

## Parameters

### styleString

`string`

CSS style string.

## Returns

`Record`\<`string`, `string`\>

Map of variable names to color values.

## Author

## Dailker
