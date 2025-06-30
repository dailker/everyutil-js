[**FS_UTILS**](../../README.md)

***

[FS_UTILS](../../README.md) / [secureDelete](../README.md) / secureDelete

# Function: secureDelete()

> **secureDelete**(`filePath`, `passes?`): `Promise`\<`void`\>

Defined in: [secureDelete.ts:9](https://github.com/dailker/everyutil/blob/26e2bb73429918cf0d08899e9efd90b82a42c92e/src/fs/secureDelete.ts#L9)

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
