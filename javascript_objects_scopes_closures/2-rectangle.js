/*
Create a class that initialize an instance of the same
class using a constructor (just like __init__ in python)
and return an empty object if either values are <= 0
*/

class Rectangle {
    constructor(w, h) {
        if (w > 0 || h > 0) {
            this.width = w;
            this.height = h;            
        }
        else {
            return {};
        }
    }
}

module.exports = Rectangle;