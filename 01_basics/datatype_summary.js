/*
JavaScript is a dynamically typed language, which means that data types of variables are 
determined by the value they hold at runtime and can change throughout the program as 
we assign different values to them.

There are two categories of data types:

1)Primitive: These are call-by-value. The types of primitive data types include String, Number, Boolean, Null,
  Undefined, Symbol, and BigInt. Note that Symbols uniquely identify variables, even if two variables have the 
  same data and data type. Primitive variables datatype is same but null datatype is object 

2) Non-primitive: These are call-by-reference. The types of non-primitive data types are Array, Object, and Function.
   The data type for these is 'object,' but for functions, they return a data type of 'function,' though they also have
   an object data type.
*/

const id = null
let studentName = "Taman"
let numbersymbol = Symbol(10)  // Symbol is a primitive data type that is used to create unique and immutable identifiers.
let number = 10
let val = true
let userid
let uniqueId = 12
let hugeval = 12222435454565756756767867867867n //adding an n makes the engine/compiler to treat it as bigint

console.table([typeof id, typeof studentName, typeof number, typeof numbersymbol, typeof val, typeof userid, typeof hugeval])

//Non primitive datatypes

arr = [1,2,3,4,5]                         //array 
console.log(typeof arr)

let studentinfo = {                  //object
  num : 1,
  name : "TJ",
  type : "student"
};

console.log(typeof studentinfo)

//function

function add() {
  n = 3+4
  console.log(n)
}

add()

console.log(typeof add)

//******************************STACK & HEAP MEMORY
//The primitive datatypes are stored in the stack memory while the non-primitive datatypes are stored in the heap memory
//Hence things stored in stack memory stores a copy(pass by value) whereas in the heap are passed by reference
let char = 'a'
let string = char
string = 'e'
console.log(char)
console.log(string)

let obj1 = {
   my_name : "TJ",
   email : "tkaur"
}

let obj2 = obj1

obj2.email = "tamankaur"

console.log(obj1.email)
console.log(obj2.email)

// when we change the value of email element in the obj2, value of email element of obj1 also changes because they
// are both referring to the same obj in the heap

