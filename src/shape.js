function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.area = function() {
  if (this.sides !== 4) {
		  return 0;
	}
};

Shape.prototype.perimeter = function() {
	if (this.sides !== 4) {
		  return 0;
	}
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function() {
	if (this.sides === 4) {
		//return " _ \n |_|"; 
    //return "A shape with " + this.sides + " sides";
   return " _ \n |_| " + this.sides + " sides";
 }
 else return 0; //this won't work yet 

};

//print color in node console 
Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]";
};

//START HERE - DONE
Shape.prototype.getRGB = function() {
	if (this.color === "red") {
		return "rgb(255,0,0)";
	}
  // Return the rgb value (as a string) for the color you've selected.
  // You can have a preset list of colors that you switch on.
}

module.exports = Shape;
