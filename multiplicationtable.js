var readlineSync = require("readline-sync");
let x = readlineSync.question("Enter the input number: ")

for(i=1;i<=10;i++){
    console.log(i+'x'+x+'='+i*x);
}