[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [secureDelete](../README.md) / secureDelete

# Function: secureDelete()

> **secureDelete**(`filePath`, `passes?`): `Promise`\<`void`\>

Defined in: [secureDelete.ts:9](https://github.com/dailker/everyutil-js/blob/b3e269da55b7d96c15eb37e98c5c4f6b94f05f6f/src/fs/secureDelete.ts#L9)

Securely deletes a file by overwriting it with random data before removal.

## Parameters

### filePath

`string`

Path to the file.

### passes?

`number` = `3`

Number of overwrite passes.

## Returns

`Promise`\<`void`\>

Resolves when file is securely deleted.

## Author

## Dailker
