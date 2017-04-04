/**
 * Class build my Own class
 * Created by cyk on 14-8-19.
 */

/*
 *  很巧妙的办法
 */
var Class = function() {
    "use strict";

    // in current line, 'this' is : Class {} 对象实例
    // in the finally, as we have a return value ,so the Class {} is unused.

    // 这样的做法每次都会产生一个'新的' klass 字面量方法
    var klass = function() {
        // this 均是上下文中新生成的实例
        this.init.apply(this, arguments);
    };

    klass.prototype.init = function() {};

    // 定义 prototype 的别名
    klass.fn = klass.prototype;

    // 定义类的别名
    klass.fn.parent = klass;


    // 给类添加属性
    klass.extend  = function ( obj ) {
        // 可选的回调方法 extended
        var extended = obj.extended;

        for( var i in obj ) {
            klass[i] = obj[i];
        }
        if (extended) extended(klass);
    };

    // 给实例添加属性
    klass.include = function ( obj ) {
        // 可选的回调方法
        var included = obj.included;
        for( var i in obj ){
            klass.fn[i] = obj[i];
        }
        if (included) included(klass);
    };

    /*
     * 这里的实现支持extended 和included 回调。
     * 将属性传入对象后就会触发这两回调函数
     */

    return klass;
};

var ORMModule = {

   save: function () {
       "use strict";
       // 共享的函数
   }
};

var Person = new Class();

// 虽然和上一行代码一样,但是获得的值却是新 new 出来的,
// 所有 Asset 和 Person 指向的都是 Class 的不同变量,只是变量内容相似罢了
var Asset  = new Class();

// 所以 Person 和 Asset 现在指向的并非同一个变量

Person.include(ORMModule);

Asset.include(ORMModule);

Person.include({
    find: function() {
       console.log(this);
    }
});

// person is : Class instance,
// klass {init: function, parent: function, save: function, find: function}
var person = new Person();

var asset = new Asset();


person.find(); // klass

asset.find();  // undefined is not a function

