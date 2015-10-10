/**
 * Created by yakuncyk on 15/7/18.
 */

"use strict";

//module.exports = {
//    a: 1,
//    b:2
//};

// now, exports is module.exports, so module.exports.a = 2
exports.a = 2;

exports.b = 3;

// don't work
exports = {
    x: 5
};
