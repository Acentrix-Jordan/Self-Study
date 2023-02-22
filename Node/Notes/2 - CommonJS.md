# CommonJS

Common JS is a standard that states how a module should be structured and shared

Node.js adopted CommonJS when it started out and is what you will see in code bases

We can include our modules into files using the require() method.

add.js

```
const add = ( a, b ) => {
    return a + b;
};

console.log(add(1,2));

```

index.js

```
require('./add');
```

We can omit the .js file extensions from our module

## Module Exports

We can export certain aspects of our modules using the module.exports method

add.js

```
const add = ( a, b ) => {
    return a + b;
};

module.exports = add;
```

index.js

```
const add = require('./add');
```

The name of the variable we asign our require to can be anything

module.exports is a default export

## Module Scope

Each module in node.js has its own scope so variables don't clash.

It achieves this using the IIFE Pattern

```
(function () {
	const superHero = "Batman";
	console.log(superHero);
})();

(function () {
	const superHero = "Superman";
	console.log(superHero);
})();
```

Each IIFE gets its own local scope

IIFE = Immediately Invoked Function Expression (IIFE)

Before a module's code is executed, Node.js will wrap it with a function wrapper that provides module scope

This provides encapsulation

## Module Wrapppers

The IIFE that wraps every modules contains 5 parameters

1. exports
2. require
3. module
4. \_\_filename
5. \_\_dirname

```
(function(exports, require, module, __filename, __dirname) {
    const superHero = 'Batman';
    console.log(superHero)
})
```

These are the global variables provided by Node.js

### \_\_dirname

This is the folder name of the current module

### \_\_filename

File name of current module

### require

imports a module by path

### module

Reference to current module

### exports

We will look at later

## Module Caching

When we require a new module it is loaded and cached for subsiquent loading

Caching helps with the performance

## Import Export Patterns

## Pattern 1 - Single Export

### Exports

```
const pattern_1_add = (a, b) => {
	return a + b;
};

module.exports = pattern_1_add;
```

### Imports

```
const pattern_1_add = require("./fileName");
```

---

## Pattern 2 - Single Export

### Exports

```
module.exports = (a, b) => {
	return a + b;
};
```

## Imports

```
const xyzRandomnName = require("./fileName");
```

---

## Pattern 3 - Multi Export

### Exports

```
const pattern_3_add = (a, b) => {
	return a + b;
};

const pattern_3_subtract = (a, b) => {
	return a + b;
};

module.exports = {
	add,
	subtract,
};
```

### Imports - Pre ECMAScript 6

```
const math = require("./fileName");

math.add();
math.subtract();
```

### Imports - Post ECMAScript 6 (Destructing)

```
const math = require("./fileName");
const { add, subtract } = math;
```

---

## Pattern 4 - Direct module.exports on function

### Exports

```
module.exports.pattern_4_add = (a, b) => {
	return a + b;
};

module.exports.pattern_4_subtract = (a, b) => {
	return a + b;
};
```

### Imports the same as Pattern 3

---

## Pattern 5 - IIFE Exports

### Exports

```
exports.pattern_4_add = (a, b) => {
	return a + b;
};

exports.pattern_4_subtract = (a, b) => {
	return a + b;
};
```

### Imports the same as Pattern 3

---

---

# Recap CommonJS

-   Each file is treated as a module
-   Each module is encapsulated and has local scope
-   We have to explicity tell the module system which parts of the code should be exported
-   To import we use the require function
