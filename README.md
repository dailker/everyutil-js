# EveryUtil

A utility library for JavaScript/TypeScript with commonly used string, number, and array functions.

## Installation

```sh
npm install everyutil
```

## Usage

```typescript
import { isEmpty, capitalize, toCamelCase, clamp, unique } from 'everyutil';

isEmpty([]); // true
capitalize('hello'); // 'Hello'
toCamelCase('hello_world'); // 'helloWorld'
clamp(10, 0, 5); // 5
unique([1, 2, 2, 3]); // [1, 2, 3]
```

## Documentation

- [String Utilities](./docs/STRING_UTILS.md)
- [Number Utilities](./docs/NUMBER_UTILS.md)
- [Array Utilities](./docs/ARRAY_UTILS.md)

Each sub-README links back here for easy navigation.