const readlineSync = require("readline-sync");

let text =("Hello! Welcome to the Pizza Flavors Manager.Please choose your actions: ");
 let text2 = ("1 - List all the pizza flavors");
 let text3 = ("2 - Add a new pizza flavor");
 let text4 = ("3 - Remove a pizza flavor");
 let text5 = ("4 - Exit this program");
 let question = new Number(readlineSync.question("Hello! Welcome to the Pizza Flavors Manager. Please choose your actions: 1 - List all the pizza flavors 2 - Add a new pizza flavor 3 - Remove a pizza flavor 4 - Exit this program Enter your action's number:Enter your action's number:")); 

 let arr = [n]

 if (question ==1) {
    
    console.log(arr +question); 
  }

 else if (question ==2)  {
    let n = new Number(readlineSync.question("Give me a pizza taste"));
    let arr = [n]
    arr.push(n)
    
  }

  else if (question ==3)  {
    let e = new Number(readlineSync.question("Erased a pizza taste"));  
    arr.pop(e); 
    console.log("Too !");
  }
  else if (question ==4)  {

     new Error("Stop script");
  }


  /*
let arr = ["Apple", "Pear", "Banana"]


console.log();


arr.push("Cherry");

*/