/***
 * Excerpted from "Async JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tbajs for more book information.
 ***/

/**
 *
 * x,y 取值变化的时候, 不会导致无限循环
 *
 * 1. newValue === oldValue 时, set 方法不会导致触发 change 事件
 * 2. 模型正处于自身的 change 事件期间, 不会再触发 change 事件
 *
 */
var Backbone = require('backbone');

var x = new Backbone.Model({value: 0});
var y = new Backbone.Model({value: 0});
var z = new Backbone.Model({value: 8});

x.on('change:value', function (x, xVal) {
    // 这里不会触发 y 的 change 事件
    console.log('x start');
    y.set({value: xVal / 2});
    console.log(1);

    z.set({value: 9});
    console.log(3);
});

y.on('change:value', function (y, yVal) {
    console.log('y start');
    x.set({value: 2 * yVal});
    console.log(2);
});

z.on('change', function() {
    x.set("value",6);
    console.log('z changed');
});

x.set("value",5);
console.log("x", x.get("value"));
console.log("y", y.get("value"));