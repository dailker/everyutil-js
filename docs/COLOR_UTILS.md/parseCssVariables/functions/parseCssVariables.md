[**COLOR_UTILS**](../../README.md)

***

[COLOR_UTILS](../../README.md) / [parseCssVariables](../README.md) / parseCssVariables

# Function: parseCssVariables()

> **parseCssVariables**(`styleString`): `Record`\<`string`, `string`\>

Defined in: [parseCssVariables.ts:10](https://github.com/dailker/everyutil/blob/2c6c8c707de5d4a5d228d272d2d21855929838e2/src/color/parseCssVariables.ts#L10)

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
