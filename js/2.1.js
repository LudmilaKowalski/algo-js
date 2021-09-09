
const readlineSync = require("readline-sync");
let numb1 = new Number (readlineSync.question("What's your age ?")); 

if (numb1 >= 18)  {
    console.log("You probably are an adult");
  } else {
    console.log("You probably are a child");
  }