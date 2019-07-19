;[1, 2, 3].map(n => n + 1)

var a = 1
for (var a = 0; a < 10; a++) console.log(a)
// prints 10

let b = 1
for (let b = 0; b < 10; b++) console.log(b)
// prints 1

let c = [1, 2, 3].reduce((acc, current) => acc + current)
console.log(c)
// prints 6

let d = [1, 2].map(el => ({ val: el, valAcc: el + 3 }))
console.log(d)
// return an object
