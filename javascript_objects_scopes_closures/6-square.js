#!/usr/bin/node
/*
Derived Square class with charPrint method
that prints the rectangle using the character c
*/

const P_Square = require('./5-square.js');
class Square extends P_Square {

    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        for (let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width))
        } //Possible to do the same thing using nested loops.
    }
}

module.exports = Square;