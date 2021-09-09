const readlineSync = require("readline-sync");
let size =new Number (readlineSync.question("Whats your shoe size ?"));
let birth =new Number (readlineSync.question("Whats your birthyear ?"));
let two = 2;
let five = 5;
let fifty = 50;
let num = 1766;


let totalnumb = size*two;

console.log(totalnumb+five*fifty-birth+num);