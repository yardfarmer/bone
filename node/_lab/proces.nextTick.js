/**
 * Created by yakuncyk on 15/7/18.
 */

"use strict";

console.log('start');

process.nextTick(function() {
    console.log('nextTick callback');
});




console.log('scheduled');


/**
 * 异步的立即执行
 */
setImmediate(function() {
    console.log('setImmediate execute');
})

//process.nextTick = function() {}
