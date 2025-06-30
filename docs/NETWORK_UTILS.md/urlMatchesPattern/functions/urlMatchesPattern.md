[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [urlMatchesPattern](../README.md) / urlMatchesPattern

# Function: urlMatchesPattern()

> **urlMatchesPattern**(`url`, `pattern`): `boolean`

Defined in: [urlMatchesPattern.ts:11](https://github.com/dailker/everyutil/blob/cee559aadda9e0c298e06364cba9020e97a8b19b/src/network/urlMatchesPattern.ts#L11)

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
