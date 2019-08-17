## Covering ES6 features

### Babel

- Setting babel

### Hoist

- Understading hoisting: js hoists all the function and variables to the top of its declaration
- To solve hoist behavior, use let and const.
- let and const have block scope, var have function scope
- const is like let but immutable (can't be changed)

### Arrow functions

### Parameters

- Default parameters
- Rest parameters: the problem is how function arguments can be accessed. You can access it as an array, but its not exactly one. All the parameters are set to the arguments, but you can't differentiate them.
- Spread parameters: the inverse of the rest parameter, you can pass a parameter that will be assigned to the parameters of the function

### Template String

- Template string comes to make our lifes easier, multi line strings
  declarations making your code much more readable and concise

### Object Enhacements

- Destructuring: less code accessing objects
- Destructuring directly in functions
- " to skip arguments

### Object/Functions Shorthands

### Modules

- CommonJs and Asynchronous Module Definition(AMD) (community)
- ECMAScript 6: start organizing the code better, make reusable components and decrease the complexity of each part of our work
- Functions and variables won't be visible unless explicitly export them and import them
- import more than one module inside { }
- https://stackoverflow.com/questions/52425643/node-js-export-a-normal-function-or-arrow-function

### Promises

- no more callback hell (a lot of levels of nested identation to control access to a function while consuming async content)
- promises comes to avoid it
- .then() method takes two possible parameters: resolve and reject
- .all()
- Promise.all(): will not be triggered until all the Promises in the array have been triggered

### Generators

- run to completion before any other funtion run
- it's possible to stop the processing and later it can resume from there and continue
- syntax declaration: function \*example()

`function *numbers() { console.log('The magic has started'); yield 1; yield 2; yield 3; }const iterator = numbers();console.log(iterator.next()); // {value: 1, done: false} console.log(iterator.next()); // {value: 2, done: false} console.log(iterator.next()); // {value: 3, done: false} console.log(iterator.next()); // {value: undefine, done: true}`

### Sets

- collection that each item must bem unique

### change test SECOND TIME asd asd