const readlineSync = require("readline-sync");

let numb1 = new Number (readlineSync.question("Give me a number with decimal")); 

let numb2 = new Number (readlineSync.question("Give me another one with decimal"));

let totalnumb = Math.round(numb1)* numb2;

console.log(totalnumb);