/**
 * Created by yakuncyk on 15/6/11.
 */

"use strict";

function randomDelay() {
    var time = Math.random() * 500;
    return function(callback) {
        setTimeout(
            callback.bind(this, time),
            time);
    }
}

function *genSlowly() {
    for( var i = 0; i < 10; i++) {
        console.log(i);
        console.log(yield randomDelay());
    }
}