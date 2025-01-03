# Math Utilities

## randArray

Generate an array of random values of a specified type.

```typescript
import { randArray } from 'everyutil/math/randArray';

randArray({ length: 5, dtype: 'int', min: 10, max: 20 }); // [13, 19, 10, 15, 17]
randArray({ length: 3, dtype: 'float', min: 0, max: 1 }); // [0.12, 0.98, 0.34]
randArray({ length: 4, dtype: 'bool', boolWeight: 0.8 }); // [true, true, false, true]
randArray({ length: 2, dtype: 'string', strMinLen: 3, strMaxLen: 8 }); // ['aB3', 'Zx1pQ']
```

### Options

- `length`: number of elements (required)
- `dtype`: 'int' | 'float' | 'bool' | 'string' (default: 'int')
- `min`, `max`: range for numbers (default: 0, 100)
- `charset`: for strings (default: alphanumeric)
- `strMinLen`, `strMaxLen`: string length bounds (default: 5, 10)
- `boolWeight`: probability of `true` for booleans (default: 0.5)

Throws an error for unsupported `dtype` values.
