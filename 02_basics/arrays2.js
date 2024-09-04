const numbers = [1,2,3]
const alphanumeric = ['one', 'two', 'three']

// numbers.push(alphanumeric)
// console.log(numbers)                   //array can be pushed to another array resulting in array within an array

// const num3 = numbers.concat(alphanumeric)
// console.log(num3)

// const num4 = [...numbers, ...alphanumeric]       //is called spread function and can be used to merge as many arraays as possible
// console.log(num4)

const num5 = [1,2,3, [4,5,[6,7]]]
const num6 = num5.flat(3)
console.log(num6)

console.log(Array.isArray(num5))              //checks if the variable is an array or not

const str = "hello"
console.log(Array.isArray(str))

console.log(Array.from(str))                //creates an array from the given variable in the string

const num7 = Array.of("Taman")
console.log(Array.isArray(num7))
console.log(num7)
