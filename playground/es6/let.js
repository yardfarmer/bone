"use strict"

/**
 * let 声明的变量只在它所在的作用域内有效
 */

// demo 1
{
    let bar = 1;
    var foo = 2;
}

console.log(foo);

// demo2
function dosomething() {
    // hoisting, 会提前做好变量声明工作,
    // 但不会进行赋值.
    console.log(a);

    //let a = "";
    //var a = "";
}
dosomething();


// demo3

var a = [];

for (var i = 0; i < 10; i++) {
    let c = i;
    a[i] = function() {
        console.log(c);
    }
}

a[8]();


// demo 4

function outer() {
    let bar = "foo";

    return function() {
        console.log("outer varibale is:",bar);
    }
}
outer()();


(function f1() {
    let n = 5;
    if(true) {
        //let n = 10;
        n = 10;
    }

    console.log("block scope, n:", n);
}());


// 块级作用域
// 可以代替 (function(){}()) :IIFE
// 立即执行匿名函数
{
    let foo = "lorem";

    //function bar() {
    //
    //}
    let bar = function() {
        console.log('this is in {}');
    };

    bar();
}



function f() {
    console.log('iam outside');
}


(function() {

    // f();
    // 如果在下面重复声明 函数f, 会发生 hoisting
    // 导致 f, undefined
    var f = function() {
        console.log('iam inside');
    };
    //
    console.log(f());

}());

// f 指向的还是外层函数 f, 与块级作用域相关
f();






