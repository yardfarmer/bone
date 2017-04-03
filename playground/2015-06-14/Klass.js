/**
 * Created by yakuncyk on 15/6/14.
 */

"use strict";

var Class = function() {
    var klass = function() {
        this.init.call(this, arguments);
    };

    klass.prototype.init = function() {
        return 3;
    };

    return klass;
};

var Person = new Class();
var People = Class();

var person = new Person();
var people = new People();


console.dir(person);
console.dir(people);



