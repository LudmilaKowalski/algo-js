const readlineSync = require("readline-sync");
let hello = "Begin ";
let s1 =readlineSync.question("Whats the begin of your story ?");
let s2 =readlineSync.question("Tell me more !");
let s3 =readlineSync.question("An so what ?");
let s4 =readlineSync.question("The last but not the least");
let end = "COngrats ! Thats an end !"

console.log(hello+s1+s2+s3+s4+end);