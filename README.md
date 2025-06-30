# 🌟 everyutil

**An all-in-one JavaScript utility package – lightweight, powerful, and constantly growing.**

---

## 🚀 About

`everyutil` is a comprehensive utility library that brings together the most useful functions from popular utility packages into a single, easy-to-use module.

Whether you’re building a quick script or a production-grade application, `everyutil` gives you the tools you need – with zero bloat and maximum efficiency.

And the best part? It's just getting started.  
I’m adding new functions **daily** to make `everyutil` the **largest and most complete** utility toolkit available.

---

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

// Math utilities
import { randArray } from 'everyutil/math/randArray';

randArray({ length: 5, dtype: 'int', min: 10, max: 20 }); // e.g. [13, 19, 10, 15, 17]
```

## Documentation

- [String Utilities](https://github.com/dailker/everyutil/blob/main/docs/STRING_UTILS.md)
- [Number Utilities](https://github.com/dailker/everyutil/blob/main/docs/NUMBER_UTILS.md)
- [Array Utilities](https://github.com/dailker/everyutil/blob/main/docs/ARRAY_UTILS.md)
- [Math Utilities](https://github.com/dailker/everyutil/blob/main/docs/MATH_UTILS.md)

Each sub-README links back here for easy navigation.