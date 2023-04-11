//complete this code
class Rectangle {
	    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get get_width() {
        return this.width;
    }

    get get_height() {
        return this.height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
	    constructor(width, height) {
        super(width, height);
    }

    getPerimeter() {
        return this.width*2 + this.height*2;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
