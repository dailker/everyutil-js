[**COLOR_UTILS**](../../README.md)

***

[COLOR_UTILS](../../README.md) / [parseCssVariables](../README.md) / parseCssVariables

# Function: parseCssVariables()

> **parseCssVariables**(`styleString`): `Record`\<`string`, `string`\>

Defined in: [parseCssVariables.ts:10](https://github.com/dailker/everyutil/blob/0ec5ce08552e5059ec58e2975404aeb74a6202b1/src/color/parseCssVariables.ts#L10)

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
