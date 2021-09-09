const readlineSync = require("readline-sync");
let numb = new Number (readlineSync.question("What is your favorite number ?"));

if (numb== 42)  {
    console.log("Great ! Good choice !");

  } while (numb!=42) {

    console.log("Are you sure?");
    numb = new Number (readlineSync.question("What is your favorite number ?"))
  }