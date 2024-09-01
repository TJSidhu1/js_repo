let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let newDate = new Date(2023, 0, 11)
let newDate = new Date(2023, 0, 11, 5, 30)
console.log(newDate.toLocaleString())
console.log(newDate.toDateString())

// let date2 = new Date()
console.log(Date.now())
console.log(Date.now().toLocaleString())
console.log(Date.now().toString());
