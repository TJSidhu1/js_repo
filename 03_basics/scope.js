let a = 10
console.log(a)

while(a == 10)
{
    a = 12
    console.log(a)
    let b = 14 
    // With let: The variable b is limited to the scope in which it is declared (inside the loop). Once you leave the loop,
    // b is no longer accessible.
    // Without let: The variable b becomes global, meaning it can be accessed outside the loop and throughout the rest
    //  of your code.
    

    console.log(b)
}

console.log(a)
console.log(b)