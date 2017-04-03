/**
 * Created by cyk on 14-7-5.
 */

var Class = function () {

    var klass = function () {
        this.init.apply ( this, arguments);
    };

    klass.prototype.init = function () {};

    klass.fn = klass.prototype;

    klass.fn.parent = klass;

    klass.a ="A";

    return klass;
};


var Person = new Class();

console.log(Person());
console.log( typeof Person, Person.a,typeof Person);