/**
 * Created by yakuncyk on 15/7/14.
 */

"use strict";

function F() {

    // 1.创建一个新对象

    // 2.将构造函数的作用域赋给 this 对象

    // 3.执行构造函数中的代码(为这个对象添加属性)

    // 4.返回新对象

    this.init();
}

F.prototype.init = function() {
    console.log("init");
};


new F();
