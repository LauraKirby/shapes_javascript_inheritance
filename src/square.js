var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(4, color);
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Shape.prototype); 
Square.prototype.constructor = Square; 

Square.prototype.area = function(){
	return this.sideLength *2; 
}

Square.prototype.perimeter = function(){
	return this.sideLength *4; 
}
// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
