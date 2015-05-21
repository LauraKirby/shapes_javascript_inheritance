var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(length, width) { 
	this.length = length; 
	this.width = width; 
	
}
Rectangle.prototype = Object.create(Shape.prototype); 
Rectangle.prototype.constructor = Rectangle; 

Rectangle.prototype.area = function() {
	return (this.length * this.width); 
}


Rectangle.prototype.perimeter = function() {
	return (this.length * 2) + (this.width * 2); 
}

module.exports = Rectangle;
