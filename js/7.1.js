const readlineSync = require("readline-sync");

function rand10(max) {
    return Math.floor(Math.random(100) * max);
  
  }

let random = rand10(100);
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
  if (n == random) {
    console.log("Good");
    

  }
    while (n != random) {
      n = new Number (readlineSync.question("Give me number"));
     if (n < random) {
          console.log("Too low"); 
        }

       else if (n > random)  {
          console.log("Too high!");
        }

        
       
      }
      
      console.log("Good");
  



 
  //console.log(rand10(100));