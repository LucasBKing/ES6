// DEFAULT PARAMETERS
const applyDiscount = (cost, discount = 2) => cost - discount
let a = applyDiscount(5) // prints 3
let b = applyDiscount(5, 3) // prints 2
console.log(a, b)

// REST PARAMETERS
const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 0)
console.log(sum(2, 4, 5, 6, 7))
// prints 24

const sum2 = (start, ...numbers) =>
  numbers.reduce((acc, current) => acc + current, start)
console.log(sum2(20, 4, 5, 6, 7))
// prints 24

// SPREAD PARAMETERS
const sum3 = (x, y) => x + y
let nums = [1, 2]
console.log(sum3(...nums))
// prints 3
