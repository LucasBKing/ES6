// // defining
// const p = new Promise((resolve, reject) => {
//     if(/*condition */)
//         resolve(/*value*/)
//     else
//         reject(/*reason*/)
// })

// //consuming
// p.then(res => console.log(res), err => console.log(err))

const pA = () => new Promise((resolve, reject) => setTimeout(resolve, 1000))
const pB = () => new Promise((resolve, reject) => setTimeout(resolve, 2000))
const pC = () => new Promise((resolve, reject) => setTimeout(resolve, 3000))
const pD = () => new Promise((resolve, reject) => setTimeout(resolve, 3000))

Promise.all([pA(), pB(), pC(), pD()]).then(([a, b, c, d]) => console.log('ok'))
