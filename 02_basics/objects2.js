const user = new Object()      //singleton object
appuser = {
    name : "Tamanjeet",
    id : 123,
    isloggedin : true,
    details : {
        streetAddress : 657,
        city : "NY",
        zip : 23465
    }

}

console.log(appuser.id)
console.log(appuser.details.zip)              //object within an object

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

const obj4 = {...obj1, ...obj2}            //spread operator
console.log(obj4)

console.log(Object.keys(appuser))
console.log(Object.values(appuser))