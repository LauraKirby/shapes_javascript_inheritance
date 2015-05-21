var Square = require("../src/square");

var square;
square = new Square(2, "red");

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe("Color", function() {
    it("should return 'rgb' and three numbers separated by commas with parens", function() {
      expect(square.getRGB()).toEqual("rgb(255,0,0)");
    });
  });

  // Write more specs!!
});
