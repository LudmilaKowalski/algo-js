const readlineSync = require("readline-sync");
let numb = new Number (readlineSync.question("Give me a number between 1 and 7 please"));

if (numb==1)  {
    console.log("Monday");
} else if (numb==2) {
    console.log("Tuesday");
  
  } 
  
  else if (numb==3) {
    console.log("Woensday");
  
  }

  else if (numb==4) {
    console.log("Tuersday");
  
  }

  else if (numb==5) {
    console.log("Friday");
  
  }

    else if (numb==6) {
    console.log("Saturday");
  
  }

  else if (numb==7) {
    console.log("Sunday");
  
  }
  
