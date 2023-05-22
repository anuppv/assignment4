var readlineSync = require("readline-sync");
let  lim = readlineSync.question("Enter a limit: ")

let val = 0;
lim = parseInt(lim);

for(let i=1;i<=lim;i++)
{
    if((i%2) != 0){
    val += i;
}

}

console.log('Sum of odd numbers = ', val);