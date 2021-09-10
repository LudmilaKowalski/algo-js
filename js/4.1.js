const readlineSync = require("readline-sync");
let numb = new Number (readlineSync.question("Give me a width"));
let numb1 = new Number (readlineSync.question("Gice me a heigt"));


function calcSurface(numb, numb1) {
    return numb * numb1;
  }

  console.log(numb * numb1);