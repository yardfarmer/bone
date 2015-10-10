/**
 * Created by yakuncyk on 15/6/7.
 */
"use strict";
class Polygon {
    constructor(height, width) {
        this.name = "polygon";
        this.height = height;
        this.width = width;
    }

    sysName() {
        console.log(this.name, this.height);
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = "square";
    }
    get area() {
        console.log( this.height * this.width);
        return this.height * this.width;
    }
}

let s = new Square(5);

s.sysName();

console.log(s.area);