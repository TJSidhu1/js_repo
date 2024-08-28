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

arr = [1,2,3,4,5]
console.log(typeof arr)
