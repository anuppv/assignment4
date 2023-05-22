var readlineSync = require("readline-sync");
let x = readlineSync.question("Enter the number: ")
let Prime = true;

if (x == 1){
    console.log('1 is neither Prime nor Composite');
} else if(x > 1){
    for (let i = 2; i < x;i++){
        if (x%i == 0) {
            Prime = false;
            break;
        }
    }

if (Prime) {
    console.log('Entered number is Prime');
} else {
    console.log('Entered number is not Prime');
}
}
else{
    console.log('Number is not Prime');
}