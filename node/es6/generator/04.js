/**
 * Created by yakuncyk on 15/6/11.
 */

"use strict";

var arr = [1, [[2,3],4],  [5,6]];


var flat = function* (a) {
    var length = a.length;

    for(var i = 0; i< length; i++) {
        var item = a[i];
        if(typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    };
};

var iterator = flat(arr);

for(var f of iterator) {
    console.log(f);
}



console.log('1');

for(var f of iterator) {
    console.log(f);
}

console.log('2');