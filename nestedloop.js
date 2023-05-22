var readlineSync = require("readline-sync");
let  n = readlineSync.question("Enter a number limit for loop: ")
let str ="";

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        str += j+" ";
    }
    str += " \n";
}

console.log(str);