#!/usr/bin/node

function Rectangle (w, h) {
  this.width = w;
  this.height = h;
}

Rectangle.prototype.print = function () {
  for (let i = 0; i < this.height; i++) {
    let line = '';
    for (let j = 0; j < this.width; j++) {
      line += 'X';
    }
    console.log(line);
  }
};

module.exports = Rectangle;
