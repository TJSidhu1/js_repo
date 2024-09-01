arr1 = [1,2,3,4,5]
arr2 = ["one", "two", "three", "four"]

arr3 = new Array(5,4,3,2,1)

console.log(arr1)
console.log(arr2)
console.log(arr3)

arr1.push("a")
console.log(arr1)
arr2.pop()
console.log(arr2)

const array1 = arr1.slice(1,3)
console.log(array1)
const array2 = arr1.splice(1,3)
console.log(array2)