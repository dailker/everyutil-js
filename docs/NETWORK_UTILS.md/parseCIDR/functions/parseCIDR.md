[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [parseCIDR](../README.md) / parseCIDR

# Function: parseCIDR()

> **parseCIDR**(`cidr`): `null` \| \{ `first`: `string`; `last`: `string`; `mask`: `string`; `network`: `string`; `size`: `number`; \}

Defined in: [network/parseCIDR.ts:8](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/network/parseCIDR.ts#L8)

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
