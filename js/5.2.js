

const readlineSync = require("readline-sync");



function askTvSerie() {
    return a +b +c 
}

const a = readlineSync.question("Whats your favorite series ?");
const b = readlineSync.question("When she was product ? ");
const c = readlineSync.question("Who played in this series ?");
const object = { a: a, b: b, c: c };



function randomizeCast(tvSerie) {
    // Get a random number between 0 and 10
    var temp = parseInt( Math.random()*10 );

    // Get 1 or 0, whether temp is odd or even
    var isOddOrEven = temp%2;

    // Get +1 or -1, whether temp greater or smaller than 5
    var isPosOrNeg = temp>5 ? 1 : -1;

    // Return -1, 0, or +1
    return( isOddOrEven*isPosOrNeg );
}

var arlene = new Array( a,b,c);
console. log( arlene.sort(randomizeCast).toString() );