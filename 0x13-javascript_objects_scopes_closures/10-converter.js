#!/usr/bin/node

// Converts a number from base 10 to another base passed as argument
// with Closure

exports.converter = function (base) {
  return function myConverter (n) {
    return n.toString(base);
  }
};
