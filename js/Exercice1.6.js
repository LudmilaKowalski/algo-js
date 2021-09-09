const readlineSync = require("readline-sync");

let numb1 = new Number (readlineSync.question("Give me a intergrer number")); 

let numb2 = new Number (readlineSync.question("Give me another one"));

let totalnumb = numb1/ numb2;

console.log(totalnumb);