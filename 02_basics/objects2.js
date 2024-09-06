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