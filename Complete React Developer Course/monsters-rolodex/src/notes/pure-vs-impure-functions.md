# Pure Functions

`const pureFunction = (a, b) => {
    return a + b;
}`

calling pureFunction(2,4) would return 6

This is a pure function as it does not rely on anything outside of the function.

# Impure Functions

`let c = 3;`

`const funcA = (a,b) => {
    return a + b + c;
}`

The above function relys on C that is outside of the functions scope.

C may change without funcA being aware.

# Side Effects

`let c = 3`

`const funcB = (a,b) => {
c = a + b;

    return a + b;

}`

A side effect occurs when we change a variable outside of the functions scope.

The above will change the value of c when values are passed to it
