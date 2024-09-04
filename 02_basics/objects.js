const mySymbol = Symbol("key1")

const obj = {
    name : "Tamanjeet",
    id : 12,
    location: "Sacramento",
    Email: "tkaur",
    [mySymbol] : "key1",
    isloggedin : false
}

console.log(obj.name)             //access using dot operator
console.log(obj["name"])          //access using square brackets
// console.log(obj.mySymbol)
// console.log(typeof obj.mySymbol)
console.log(obj[mySymbol])
console.log(typeof obj[mySymbol])

obj.name = "TJ Sidhu"
console.log(obj)
// Object.freeze(obj)
obj.name = "Tamanjeet Kaur"
console.log(obj)

obj.greeting = function(){
    console.log("Hello")
}

console.log(obj.greeting())
console.log(obj)