/**
 * Created by cyk on 15-4-22.
 */

"use strict";

function wrapper() {
    //
    var args = Array.from ? Array.from(arguments) :
        [].slice.call(arguments);

    console.dir(args);
}


wrapper(1, 2, 3, 4, 5, 6);

// Array.of 还不支持
// Array.of(1,2,3); // [1,2,3]

// Array.keys
[1,2,3,4].keys();


// Array.keys
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}

// Array.values
// 不支持
// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }

// Array.entries
// 解构 descrtucturing 不支持
//for (let [index, elem] of ['a', 'b'].enties()) {
//    console.log(index, elem);
//}

var entr = ['a', 'b'].entries();

console.log(entr);





