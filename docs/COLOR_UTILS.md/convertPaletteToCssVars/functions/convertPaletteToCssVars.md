[**COLOR_UTILS**](../../README.md)

***

[COLOR_UTILS](../../README.md) / [convertPaletteToCssVars](../README.md) / convertPaletteToCssVars

# Function: convertPaletteToCssVars()

> **convertPaletteToCssVars**(`palette`, `prefix`): `string`

Defined in: [convertPaletteToCssVars.ts:11](https://github.com/dailker/everyutil/blob/8ebd741383aff061deffff96bf58a9059d1b9944/src/color/convertPaletteToCssVars.ts#L11)

Generates CSS variables for an entire palette.

Example: convertPaletteToCssVars(["#336699", "#ff0080"], "--color") → ":root { --color-0: #336699; --color-1: #ff0080; }"

## Parameters

### palette

`string`[]

Array of color strings.

### prefix

`string`

CSS variable prefix.

## Returns

`string`

CSS variable declarations.

## Author

## Dailker
