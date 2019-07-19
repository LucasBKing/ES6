let person = {
  name: 'John',
  lastName: 'Doe'
}

let { name, lastName } = person
console.log(`${name} - ${lastName}`)
// 'John - Doe'

// USE DESTRUCTURING DIRECTLY IN FUNCTION
const greet = ({ name, age }) => `Hey ${name}. ${age} is a good age.`
let response = greet({ name: 'John', age: 34 })
console.log(response)
// 'Hey John. 34 is a good age.'

// SKIP ITEM WITH DESTRUCTURING
let [, , third] = [1, 2, 3]
console.log({ third })
// return an object with third item
