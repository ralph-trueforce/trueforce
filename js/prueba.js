/**
 * Created by root on 12/1/16.
 */


// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};



// Rectangle - subclass
function Rectangle() {
    Shape.call(this); //call super constructor.

    //this.prototype = Object.create(Shape.prototype);//3 don't work
}

Rectangle.prototype = Object.create(Shape.prototype);//1 work
//Rectangle.prototype = new Shape();//2 work




var rect = new Rectangle();

console.log(rect instanceof Rectangle);   // true.
console.log(rect instanceof Shape);       // true.

rect.move(); // Outputs, "Shape moved."

