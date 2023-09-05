/*
Create a class that initialize an instance of the same
class using a constructor (just like __init__ in python)
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