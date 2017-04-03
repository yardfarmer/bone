/**
 * Class build my Own class
 * Created by cyk on 14-8-19.
 */

/*
 *  很巧妙的办法
 */
var Class = function() {
    "use strict";

    var klass = function() {
        // this 均是上下文中新生成的实例
        this.init.apply(this, arguments);
    };

    klass.prototype.init = function() {};

    return klass;
};

var Person = new Class();

Person.prototype.init = function() {
    "use strict";

};


// 直接添加静态方法
Person.find = function() {
    "use strict";

};


// 在原型中定义函数
// 作为实例方法
Person.prototype.save = function() {
    "use strict";

};





var person = new Person();


