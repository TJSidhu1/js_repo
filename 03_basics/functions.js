function name(){
    console.log("Tamanjeet")
}

name()

function add(number1, number2){

    console.log(number1 + number2)

}

add(2,3)

function add2(number1, number2)
{
    return (number1 + number2)
}

console.log(add2(5,7))        


function printnum(...number3)            //... is rest operator here
{

    console.log(number3)
}

printnum(300, 200, 100)

//We can also pass object to the function

function print(myobj)
{
    console.log(`Name of the person ${myobj.name} and id of the person ${myobj.id}`)
}

print({name: "Tamanjeet", id: 123})