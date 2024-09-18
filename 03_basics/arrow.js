username = {
    name : "TJ",
    class : "JS",
    function : console.log(this.name),
    topic: "Arrow functions"

}

// console.log(this)
// console.log(username.name) 
// console.log(globalThis)

// const fun = function(){
//     let username = "Taman"
//     console.log(this.username)
// }

const fun = () => {
    let username = "Taman"
    console.log(this.username)
}

fun()