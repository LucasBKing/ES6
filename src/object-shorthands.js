const name = 'John'
const lastName = 'Doe'
const person = { name, lastName }
console.log(person)
// returns an object with name an lastName

// DECLARING FUNCTIONS
// ES6
let person2 = {
  name: 'John',
  greet () {
    return `Hello, ${name}`
  }
}

// ES5
var person = {
  name: 'Henry',
  greet: function () {
    return 'Hello, ' + this.name
  }
}
