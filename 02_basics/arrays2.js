const numbers = [1,2,3]
const alphanumeric = ['one', 'two', 'three']

// numbers.push(alphanumeric)
// console.log(numbers)                   //array can be pushed to another array resulting in array within an array

const num3 = numbers.concat(alphanumeric)
console.log(num3)

const num4 = [...numbers, ...alphanumeric]       //is called spread function and can be used to merge as many arraays as possible
console.log(num4)