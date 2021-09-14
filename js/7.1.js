const readlineSync = require("readline-sync");

function rand10(max) {
    return Math.floor(Math.random() * max);
  }

let n = new Number (readlineSync.question("Give me number"));

/* if (numb== 42)  {
    console.log("Too low !");

  } while (numb!=42) {

    console.log("Are you sure?");
    numb = new Number (readlineSync.question("What is your favorite number ?"))

    } else if (n <= rand10) {
    console.log("Too low");
    n = new Number (readlineSync.question("Give me number"));
  
  } else (n >= rand10) 
    console.log("Too high!");
    n = new Number (readlineSync.question("Give me number"));
  }
*/
  if (n == rand10) {
    console.log("Good");

  }
    while (n >= rand10) {

        console.log("Too high!");
        n = new Number (readlineSync.question("Give me number"));
      }

      while (n <= rand10) {

        console.log("Too low");
        n = new Number (readlineSync.question("Give me number"));
      }



 
  //console.log(rand10(100));