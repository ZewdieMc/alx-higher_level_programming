#!/usr/bin/node

const OldSquare = require('./5-square');

class Square extends OldSquare {
  charPrint (c = 'X') {
    super.print(c);
  }
}
module.exports = Square;
