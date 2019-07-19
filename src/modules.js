// using function
export function addHashtag (value) {
  return `#${value}`
}

// Anonymous function
// module.exports = value => `#${value}`

const addHashtag2 = value => `##${value}`
export default addHashtag2
