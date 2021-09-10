//function calcDistance(a,b)


let xA = 1;

let yA = 1;

let xB = 2;

let yB = 2;

function getDistance(xA, yA, xB, yB) { 
	var xDiff  = xA - xB; 
	var yDiff  = yA - yB; 

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

var distance = getDistance(1, 1, 2, 2);
console.log(distance);

