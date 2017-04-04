/**
 * Created by yakuncyk on 15/6/7.
 */

"use strict";

//function * range() {
//    console.log('begin');
//
//    console.log('end');
//}

function range(start, end, step) {
    while (start < end) {
        //yield start;
        start += step;
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i);
}



