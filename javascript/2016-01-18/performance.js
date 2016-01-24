/**
 * @fileOverview
 * @author yakuncyk
 * @version 16/1/18
 */

"use strict";


function getFunctionTimeWithPerformance(func) {
    var timeStart = window.performance.now();

    // 执行开始
    func();
    // 执行结束
    var timeEnd = window.performance.now();

    // 返回执行时间
    return (timeEnd - timeStart);
}


function innerHTMLLoop() {
    for (var count = 0; count < 15000; count++) {
        document.getElementById('here').innerHTML += 'a'
    }
}

function innerHTMLLoop2() {
    var content = '';
    for (var count = 0; count < 15000; count++) {
        content += 'a';
    }
    document.getElementById('here').innerHTML = content;
}

var a = getFunctionTimeWithPerformance(innerHTMLLoop);
var b = getFunctionTimeWithPerformance(innerHTMLLoop2);

// 性能差距明显, 性能比近1000/1
console.log(a, b, a / b);





