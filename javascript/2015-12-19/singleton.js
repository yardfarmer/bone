/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/12/19
 */

"use strict";

var Singleton = (function (x, y) {

    var instance;

    function Func(x, y) {
        this.x = x;
        this.y = y;
        this.v = '0.1';
    }

    return {
        getInstane: function () {
            if(!instance) {
                instance = new Func(x,y);
            }
            return instance;
        }

    };
}());

console.log(Singleton.getInstane());