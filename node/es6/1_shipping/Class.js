/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/8/8
 *
 * note:
 * function declaration 与 class declaration 的一个重要
 * 区别是 function declaration 有 hosting, class declaration
 * 没有.
 */

"use strict";

// "匿名"类声明
var P = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

// "命名" class 声明
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    // 不是函数, 而是属性
    get addResult() {
        return this.calc();
    }

    calc() {
        return this.x + this.y;
    }

    static distance(a, b) {
        return a * b;
    }
}

var point = new Point(2, 3);

console.log(point.addResult);
console.log(Point.distance(6, 5));  // static method


class ColorPoint extends Point {

    constructor(x, y, color) {
        // 调用父类构造函数
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color;//+ '' + super();
    }
}

var colorPoint = new ColorPoint(2, 5, 'green');
console.log('subClass', colorPoint.toString());
console.log('subClass, 继承父类静态方法', ColorPoint.distance(3, 4));
console.log('subClass, 继承父类属性', colorPoint.addResult);
