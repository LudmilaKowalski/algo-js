const readlineSync = require("readline-sync");
let min = new Number (readlineSync.question("Give me a small number")); 
let max = new Number (readlineSync.question("Give me a high number")); 
let current = new Number (readlineSync.question("Give me a current number")); 

if ((current >= min) && (current <= max)) {
    console.log("Okay !");
} else if (min >= max) {
    console.log("Error !");
  
  } else {
    console.log("Error !");
  }