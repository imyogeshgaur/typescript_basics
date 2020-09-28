//Simple Function with void return type

function addNumber():void{
    console.log(45+55)
}
addNumber();

//Function with non void return type

function addNumber2():number{
    return 35+45
}
console.log(addNumber2())

//Function with non void parameters

function addNumber3(a:number,b:number){
    console.log(a+b)
}
addNumber3(24,34)

//Function with non void parameters and non void return type 


function addNumber4(a:number,b:number):number{
    return a+b
}
console.log(addNumber4(24,34))

//Function with optional parameters

function addNumber5(a:number,b?:number):number{
    return a+b?a+b:a
}

console.log(addNumber5(14,24))
console.log(addNumber5(14))