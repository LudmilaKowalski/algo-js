const readlineSync = require("readline-sync");

let userfirstName = readlineSync.question("What's your firstname?");
let userName = readlineSync.question("What's your name?");
let usercity = readlineSync.question("What's your city?");
console.log("Your name is " + userfirstName + userName + " and you live in " + usercity);