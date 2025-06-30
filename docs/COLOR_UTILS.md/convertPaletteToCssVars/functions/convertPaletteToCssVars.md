[**COLOR_UTILS**](../../README.md)

***

[COLOR_UTILS](../../README.md) / [convertPaletteToCssVars](../README.md) / convertPaletteToCssVars

# Function: convertPaletteToCssVars()

> **convertPaletteToCssVars**(`palette`, `prefix`): `string`

Defined in: [convertPaletteToCssVars.ts:11](https://github.com/dailker/everyutil/blob/9ec04d41a381dab61073bf86e9abc70eaf55066d/src/color/convertPaletteToCssVars.ts#L11)

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
