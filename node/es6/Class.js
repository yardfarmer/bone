/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/8/8
 */

"use strict";

class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ')';
    }
}

var point = new Point(2, 3);
point.toString();


class ColorPoint extends Point {

    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color ;//+ '' + super();
    }
}

var colorPoint = new ColorPoint(1,2,'green');
console.log(colorPoint.toString());
