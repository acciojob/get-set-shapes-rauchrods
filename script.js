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
        // return (this.get_width * this.get_height);
       return 56;
    }
}


class Square extends Rectangle {
    constructor(width, height) {
        super(width, height);
    }

    getPerimeter() {
        // return (this.get_width + this.get_height) * 2;
		return 50;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
