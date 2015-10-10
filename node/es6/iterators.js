"use strict";

let arr = [1, [2, 5], 3, "hello", {
    x: {a: 2, y: {k: 8}}
}];

let sum = 0;

for (let v of arr) {
    //sum += v;
    console.log(v);
}

console.log('1 + 2 + 3 + 4 + 5 =', sum);

// 与 in 不同的地方
var v;
for (v in arr) {
    //sum += v;
    console.log(arr[v]);
}