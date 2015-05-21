var Shape = require("../src/shape");
console.log(Shape);

var shape;

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

   describe("Perimeter", function() {
    it("should be 0 for this abstract shape", function() { 
      expect(shape.perimeter()).toEqual(0);
    });
  });

  describe("Get RGB", function() {
    it("should return 'rgb' and three numbers separated by commas with parens", function() {
      expect(shape.getRGB()).toEqual("rgb(255,0,0)");
    });
  });
  
  describe("Draw", function() {
    it("should return an assci version of the shape", function() {
      expect(shape.draw()).toEqual(" _ \n |_| 4 sides");
      //this won't work yet
    });
  });

  // Write more specs!!
});
