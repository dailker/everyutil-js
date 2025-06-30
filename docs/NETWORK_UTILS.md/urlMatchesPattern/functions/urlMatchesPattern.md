[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [urlMatchesPattern](../README.md) / urlMatchesPattern

# Function: urlMatchesPattern()

> **urlMatchesPattern**(`url`, `pattern`): `boolean`

Defined in: [network/urlMatchesPattern.ts:11](https://github.com/dailker/everyutil/blob/7c30ec40bbb398255a9be572db0a537e8bcb9c11/src/network/urlMatchesPattern.ts#L11)

Checks if a URL matches a wildcard string or RegExp pattern.

Example: urlMatchesPattern("https://a.com/page", "https://*.com/*") → true

## Parameters

### url

`string`

The URL to test.

### pattern

Wildcard string ("*" allowed) or RegExp.

`string` | `RegExp`

## Returns

`boolean`

True if matches.

## Author

## Dailker
