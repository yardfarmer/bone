/**
 * Created by yakuncyk on 15/6/11.
 */

"use strict";

function *simple() {

    console.log(1);
    yield 1;

    console.log(2);
    yield 2;

    console.log(3);
    return;
}

var iterartor = simple(); // 返回一个迭代器函数
var a;

a = iterartor.next();
console.log(a);

a = iterartor.next();
console.log(a);

a = iterartor.next();
console.log(a);


a = iterartor.next();
console.log(a);
