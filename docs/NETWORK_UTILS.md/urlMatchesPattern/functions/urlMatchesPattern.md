[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [urlMatchesPattern](../README.md) / urlMatchesPattern

# Function: urlMatchesPattern()

> **urlMatchesPattern**(`url`, `pattern`): `boolean`

Defined in: [network/urlMatchesPattern.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/urlMatchesPattern.ts#L11)

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
