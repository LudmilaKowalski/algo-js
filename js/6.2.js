/*class Rectangle {
    topLeftXPos
    topLeftYPos
    width
    length
    collides(otherRectangle)
    true
    otherRectangle
    this.collides(otherRectangle)
}*/

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPoss = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        this.otherRectangle == Rectangle
        return true;
    }

    
}

let _new = new Rectangle(2, 2);

console.log(_new.collides(4, 3));
//console.log(_new.surface);
