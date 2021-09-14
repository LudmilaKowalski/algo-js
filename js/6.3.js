
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPoss = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        this.otherRectangle += Rectangle
        return [otherRectangle];
    }

    get surface() {
        return this.width * this.lengt;
    }
}

let _new = new Rectangle(2, 2);

console.log(_new.collides(2, 3));

console.log (Math.random(1000)* Rectangle)