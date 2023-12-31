#!/usr/bin/node
/*
Create a class that initialize an instance of the same
class using a constructor (just like __init__ in python)
and return an empty object if either values are <= 0
Prints the rectangle using the character X
Exchanges the width and the height of the rectangle
Multiples the width and the height of the rectangle by 2
*/

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;            
        }
        else {
            const emptyObject = {};
            emptyObject.__proto__ = Rectangle.prototype;
            return emptyObject;
        }
    }
    
    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
        /*
        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += 'X';
            }
            console.log(row);
        }
        */
    }
    rotate() {
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
    }

    double() {
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle;
