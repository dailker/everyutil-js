[**NETWORK_UTILS**](../../README.md)

***

[NETWORK_UTILS](../../README.md) / [tcpPing](../README.md) / tcpPing

# Function: tcpPing()

> **tcpPing**(`host`, `port`): `Promise`\<`null` \| `number`\>

Defined in: [network/tcpPing.ts:11](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/network/tcpPing.ts#L11)

Lightweight TCP ping alternative (Node.js only).

Example: tcpPing('localhost', 80)

## Parameters

### host

`string`

Hostname or IP.

### port

`number`

Port number.

## Returns

`Promise`\<`null` \| `number`\>

Latency in ms or null if failed.

## Author

## Dailker
