var readlineSync = require("readline-sync");
let siz = readlineSync.question("Enter the size of an array: ")
console.log("Enter the values of array: ")

const arr=[];
let even=0;

for(let i=0;i<siz;i++){
    arr[i]=readlineSync.question(" ");
    if (arr[i]%2==0){
        even=even+1;
    }
}
console.log("Number of even numbers in the array is: "+even);
