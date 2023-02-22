# ESModules

ESModules is an alternative model system to CommonJS

## Why have another module system?

At the time Node.js was created, there was no built-in module system in JavaScript

Node.js defaulted to CommonJS as its module system

However since ES2015, JS has a standardized module system as part of the language.

The module system is called ECMAScript Modules or ES Modules or ESM

Node v14 was the first version to use stable ESM

ESModules use the file extension .mjs instead of .js

## Default Import / Export

When importing we the import name can me anything

## Pattern 1 - Single

### Export

```
const add = (a, b) => {
    return a + b
}

export default add
```

### Import

```
import add from './fileName.mjs'
```

---

## Pattern 2 - Single

### Export

export default (a, b) => {
return a + b
}

### Import

```
import add from './fileName.mjs'
```

---

## Pattern 3 - MultExport

### Export

```
const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

export default {
    add,
    subtract
}
```

### Import

```
import math from './fileName.mjs'

math.add()

math.subtract()
```

OR

```
import math from './fileName.mjs'

const { add, subtract } = math

add()

subtract()
```

## Named Import / Export

## Pattern 1

### Export

```
export const add = (a, b) => {
    return a + b
}

export const subtract = (a, b) => {
    return a - b
}

```

### Import

```
import * as math from "./fileName";

const { add, subtract } = math;
```

OR

```
import { add, subtract } from './fileName.mjs'
```

# ES Modules Summary

-   ES Modules is the ECMAScript standard for modules
-   It was introduced in ES2015
-   Node.js 14 and above support ES Modules
-   We use export keyword instead of module.exports
-   The export can be default or named
-   Default Export can be assigned any name
-   Named Exports, must match the import name
