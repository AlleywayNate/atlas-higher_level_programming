#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
      if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
        // This block is empty
        // If width or height are invalid, create an empty Rectangle
      } else {
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
