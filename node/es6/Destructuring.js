//解构函数还不支持 2015-10-18
let [foo, [[bar], baz]] = [1, [[2], 3]];

console.log(foo, bar, baz);

let [,,third] = ["foo", "bar", "baz"];

console.log(third);

let [x, , y] = [1, 2, 3];


// 剩下的全收下
let [head, hi, ...tail] = [1, 2, 6, 4];
console.log(head, hi, tail);

var [js = true] = [3,1,3];  //  如果给变量赋的值为 undefined, 则使用默认参数
console.log(js);

[x, y = 'b'] = ['a']; // x='a', y='b'
[x, y = 'b'] = ['a', undefined]; // x='a', y='b'