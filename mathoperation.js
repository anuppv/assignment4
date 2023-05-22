var readlineSync = require("readline-sync");
let op = readlineSync.question("Select the operation: 1.Addition 2.Subtraction 3.Multiplication 4.Division: ")
let a,b,res
op=parseInt(op);
if (op>0 && op<5) {
     a = readlineSync.question("Enter the first number: ")
     b = readlineSync.question("Enter the second number: ")
}
a=parseInt(a);
b=parseInt(b);
switch (op) {
    case 1:
        let add=addition(a,b);
        console.log('Result is: '+ add);
        break;
    case 2:
        let sub=subtract(a,b);
        console.log('Result is: '+ sub);
        break;
    case 3:
        let mul=multiplicate(a,b);
        console.log('Result is: '+ mul);
        break;   
    case 4:
        let div=division(a,b);
        console.log('Result is: '+ div);
        break;
    default:
        console.log("Invalid operation");
}

function addition(a,b){
    res=a+b;
    return res;
}
function subtract(a,b){
    res=a-b;
    return res;
}
function multiplicate(a,b){
    res=a*b;
    return res;
}
function division(a,b){
    res=a/b;
    return res;
}