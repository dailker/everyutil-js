[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseCIDR](../README.md) / parseCIDR

# Function: parseCIDR()

> **parseCIDR**(`cidr`): `null` \| \{ `first`: `string`; `last`: `string`; `mask`: `string`; `network`: `string`; `size`: `number`; \}

Defined in: [network/parseCIDR.ts:8](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/parseCIDR.ts#L8)

Parses a CIDR string and returns subnet info.

## Parameters

### cidr

`string`

The CIDR string (e.g., 192.168.1.0/24).

## Returns

`null` \| \{ `first`: `string`; `last`: `string`; `mask`: `string`; `network`: `string`; `size`: `number`; \}

Subnet info or null.

## Author

## Dailker
